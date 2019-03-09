import UPDATE_FORM_FIELD from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_VEHICLES_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCH_VEHICLES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                vehiclesList: action.payload.searchResults
            };
        case 'UPDATE_FORM_FIELD':
            return {
                ...state,
                vehicleApplicationForm: {
                    ...state.vehicleApplicationForm,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export default reducer;