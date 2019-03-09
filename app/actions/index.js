export const fetchVehicles = (payload) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://arnoldclark.com/used-cars/search.json?min_price=0&max_price=${payload.maxAmount}&sort_order=monthly_payment_down`;

    return (dispatch) => {
        dispatch({type: 'FETCH_VEHICLES_REQUEST'});

        return fetch(proxyurl + url)
            .then((response) =>response.json())
            .then(
                (response) => {
                    return dispatch(
                    {
                        type: 'FETCH_VEHICLES_SUCCESS',
                        payload: response
                    }
                );
            }
        )
    }
}

export const updateVehicleForm = (fieldInfo) => ({
    type: 'UPDATE_FORM_FIELD',
    payload: fieldInfo
  });