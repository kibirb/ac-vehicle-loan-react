import { connect } from 'react-redux';

import selector from './selector';
import { PaymentPlanView } from './views/PaymentPlanView';

export const PaymentPlan = connect(selector)(PaymentPlanView);