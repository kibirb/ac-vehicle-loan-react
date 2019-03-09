import { connect } from 'react-redux';

import selector from './selector';
import { RootPageView } from './views/RootPageView';

export const RootPage = connect(selector, null)(RootPageView);