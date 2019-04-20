import React from "react";
import { Switch, Route } from "react-router";
import Reports from "../screens/AdminDashboardScreens/Reports/Reports";
import CreateSeeker from "../screens/AdminDashboardScreens/CreateSeeker/CreateSeeker";
import NavBar from "../components/NavBar/NavBar";

const tabs = [
	{
		title: "REPORTS",
		to: "/"
	},
	{
		title: "SEEKERS",
		to: "/seekers"
	},
	{
		title: "CREATE SEEKER",
		to: "/createSeeker"
	}
];

const AdminDashboardRouter = props => {
	return (
		<div>
			<NavBar tabs={tabs} />
			<Switch>
				<Route exact path="/" render={props => <Reports />} />
				<Route
					exact
					path="/createSeeker"
					render={props => <CreateSeeker />}
				/>
			</Switch>
		</div>
	);
};

export default AdminDashboardRouter;
