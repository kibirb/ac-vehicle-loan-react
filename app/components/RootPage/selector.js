import { createSelector } from 'reselect';

export default createSelector(
    (state) => state.isLoading,
    (isLoading) => {

    return {
        isLoading
    };
});