import React from 'react';
import { VehiclesList } from '../../vehiclesList';


import { AddVehicle } from '../../addVehicle'
import { PaymentPlan } from '../../paymentPlan'

export const RootPageView = (props) => (
  <div className="ml-5">
    <AddVehicle />
    {!props.isLoading ?
      <React.Fragment>
        <PaymentPlan />
        <VehiclesList />
      </React.Fragment>
      : <div>Processing application and loading vehicles ...</div>}
  </div>
);