import { connect } from 'react-redux';

import selector from './selector';
import { VehiclesListView } from './views/VehiclesListView';

export const VehiclesList = connect(selector)(VehiclesListView);