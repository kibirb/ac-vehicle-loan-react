import selector from './selector';

describe('addVehicleSelector', () => {

it('returns selected values correctly', () => {
  const state = {
    vehicleApplicationForm: {
        vehiclePrice: 30000,
        depositAmount: 6000,
        deliveryDate: new Date(),
        financeOption: 2,
        arrangementFee: 80,
        completionFee: 20,
        paymentPlan: []
    },
    vehiclesList: [],
    isLoading: false
  };
  const result = selector(state);

  expect(result.applicationIsValid).toBe(true);
});

});
