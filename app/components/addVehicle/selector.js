import { createSelector } from 'reselect';
import { isNil } from 'lodash';

export default createSelector(
    (state) => state.vehicleApplicationForm,
    (vehicleForm) => {
    const vehiclePrice = vehicleForm.vehiclePrice;
    const depositAmount = vehicleForm.depositAmount;
    const deliveryDate = vehicleForm.deliveryDate;
    const financeOption = vehicleForm.financeOption;
    const completionFee = vehicleForm.completionFee;
    const arrangementFee = vehicleForm.arrangementFee;   
    const depositIsValid = !isNil(depositAmount) && !isNil(vehiclePrice) &&
        (depositAmount <= 0.15 * vehiclePrice);
    const applicationIsValid = !isNil(depositAmount) && !isNil(vehiclePrice) && !isNil(financeOption);

    return {
        vehiclePrice,
        depositAmount,
        deliveryDate,
        financeOption,
        completionFee,
        arrangementFee,
        depositIsValid,
        applicationIsValid
    };
});