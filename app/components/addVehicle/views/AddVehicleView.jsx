import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const firstMondayMonth = (date) => {
  const result = date.startOf('month');
  while (result.day() !== 15 && result.format('dddd') !== 'Monday') {
    result.add(1, 'day');
  }

  return result.format('DD/MM/YYYY');
};

const processApplication =
  (props) => {
    if (props.applicationIsValid) {
      // Calculate payment plan
      const paymentPlan = [];
      let monthlyPayment;
      const calculatedPayment = (props.vehiclePrice - props.depositAmount) / (props.financeOption * 12);
      for (let i = 0; i < props.financeOption * 12; i++) {
        const date = moment(props.deliveryDate).add(i + 1, 'months');
        const month = date.format('MMMM');
        const paymentDate = firstMondayMonth(date);
        if (i === 0) {
          monthlyPayment = calculatedPayment + props.arrangementFee;
        } else if (i === ((props.financeOption * 12) - 1)) {
          monthlyPayment = calculatedPayment + props.completionFee;
        } else {
          monthlyPayment = calculatedPayment;
        }
        paymentPlan.push({
          month,
          paymentDate,
          amount: Math.round(monthlyPayment)
        });
      }

      // Save payment plan
      props.updateVehicleForm({ paymentPlan });

      // load suitable vehicles
      props.fetchVehicles({ maxAmount: calculatedPayment });
    }
  };

export const AddVehicleView = (props) => (
  <div className="mb-5">
    <div className="mb-3">
      <strong>Vehicle application form</strong>
    </div>
    <div className="form-group">
      <label className="mr-2">Arrangement fee</label>
      <input
        id="arrangementFee"
        onChange={(e) => props.updateVehicleForm({ arrangementFee: Number(e.target.value) })}
        type="number"
        value={props.arrangementFee}
      />
    </div>
    <div className="form-group">
      <label className="mr-2">Completion fee</label>
      <input
        id="completionFee"
        onChange={(e) => props.updateVehicleForm({ completionFee: Number(e.target.value) })}
        type="number"
        value={props.completionFee}
      />
    </div>
    <div className="form-group">
      <label className="mr-2">Vehicle price</label>
      <input
        id="vehiclePrice"
        onChange={(e) => props.updateVehicleForm({ vehiclePrice: Number(e.target.value) })}
        type="number"
        value={props.vehiclePrice}
      />
    </div>
    <div className="form-group">
      <label className="mr-2">Deposit amount</label>
      <input
        id="depositAmount"
        onChange={(e) => props.updateVehicleForm({ depositAmount: Number(e.target.value) })}
        type="number"
        value={props.depositAmount}
      />
      {props.depositIsValid && <React.Fragment>
        <br />
        <p className="text-danger">Vehicle deposit has to be atleast 15%</p>
      </React.Fragment>}
    </div>
    <div className="form-group">
      <label className="mr-2">Delivery date</label>
      <DatePicker
        selected={props.deliveryDate}
        dateFormat="MMMM d, yyyy"
        onChange={(e) => props.updateVehicleForm({ deliveryDate: e })}
      />
    </div>
    <div className="form-group">
      <label className="mr-2">Finance option</label>
      <label className="mr-2">
        <input type="radio" name="financeOption" onChange={() => props.updateVehicleForm({ financeOption: 1 })} checked={props.financeOption === 1} />1 year
      </label>
      <label className="mr-2"><input type="radio" name="financeOption" onChange={() => props.updateVehicleForm({ financeOption: 2 })} checked={props.financeOption === 2} />2 years</label>
      <label className="mr-2"><input type="radio" name="financeOption" onChange={() => props.updateVehicleForm({ financeOption: 3 })} checked={props.financeOption === 3} />3 years</label>
    </div>
    {!props.applicationIsValid && <React.Fragment>
      <br />
      <p className="text-danger">Application is not complete. Please fill in all fields.</p>
    </React.Fragment>}
    <button className="btn btn-secondary" onClick={processApplication.bind(this, props)}>
      Process application
    </button>
  </div>
);