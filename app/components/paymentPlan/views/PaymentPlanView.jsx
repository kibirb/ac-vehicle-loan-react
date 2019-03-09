import React from 'react';

export const PaymentPlanView = (props) => (
	<div className="mb-5">
		<div className="mb-3">
			<strong>Summary of payment schedule</strong>
		</div>
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Month</th>
					<th>Payment Date</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{props.paymentPlan.map(
					(payment) => (
						<tr>
							<td>{payment.month}</td>
							<td>{payment.paymentDate}</td>
							<td>{payment.amount}</td>
						</tr>
					)
				)}
			</tbody>
		</table>
	</div>
);