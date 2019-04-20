import React from "react";
import { Switch, Route } from "react-router";
import Reports from "../screens/AdminDashboardScreens/Reports/Reports";
import NavBar from "../components/NavBar/NavBar";

const AdminDashboardRouter = props => {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" render={props => <Reports />} />
			</Switch>
		</div>
	);
};

export default AdminDashboardRouter;
