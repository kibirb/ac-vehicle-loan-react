import { connect } from 'react-redux';

import actions from './actions';
import selector from './selector';
import { AddVehicleView } from './views/AddVehicleView';

export const AddVehicle = connect(selector, actions)(AddVehicleView);