import React from "react";
import { Switch, Route } from "react-router";
import Reports from "../screens/SeekerDashboardScreens/Reports/Reports";
import NavBar from "../components/NavBar/NavBar";

const tabs = [
	{
		title: "REPORTS",
		to: "/"
	}
];

const SeeekerDashboardRouter = props => {
	return (
		<div>
			<NavBar tabs={tabs} />
			<Switch>
				<Route exact path="/" render={props => <Reports />} />
			</Switch>
		</div>
	);
};

export default SeeekerDashboardRouter;
