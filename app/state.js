const initialState = {
    vehicleApplicationForm: {
        vehiclePrice: null,
        depositAmount: null,
        deliveryDate: new Date(),
        financeOption: null,
        arrangementFee: 80,
        completionFee: 20,
        paymentPlan: []
    },
    vehiclesList: [],
    isLoading: false
};

export default initialState;