import { createSelector } from 'reselect';

export default createSelector(
    (state) => state.vehiclesList,
    (vehiclesList) => {

    return {
        vehiclesList
    };
});