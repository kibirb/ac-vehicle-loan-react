import { createSelector } from 'reselect';

export default createSelector(
    (state) => state.vehicleApplicationForm.paymentPlan,
    (paymentPlan) => {

    return {
        paymentPlan
    };
});