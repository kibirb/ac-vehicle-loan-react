import React from 'react';

export const VehiclesListView = (props) => (
	<React.Fragment>
		<div className="mb-3">
			<strong>Suitable vehicles list</strong>
		</div>
		{props.vehiclesList.slice(0, 6).map(
			(vehicle, index) => (
				<div key={index} className="mb-2">
					{index + 1})
					Vehicle Reference: {vehicle.stockReference}<br />
					Branch:  {vehicle.branch.name}
				</div>
			)
		)}
	</React.Fragment>
);