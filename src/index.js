import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "antd/dist/antd.css";
import AuthProvider from "./context/AuthProvider";
import { AuthContext } from "./context/AuthProvider";
import AdminDashboardRouter from "./routers/AdminDashboardRouter";
import SeekerDashboardRouter from "./routers/SeekerDashboardRouter";
import Spinner from "./components/Spinner/Spinner";

const FinalRouter = ({ permission }) => {
	let output = <Spinner />;
	if (permission === "admin") {
		output = (
			<Router>
				{" "}
				<AdminDashboardRouter />{" "}
			</Router>
		);
	} else if (permission === "seeker") {
		output = (
			<Router>
				{" "}
				<SeekerDashboardRouter />{" "}
			</Router>
		);
	}
	return output;
};

ReactDOM.render(
	<AuthProvider>
		<AuthContext.Consumer>
			{context => <FinalRouter permission={context.permission} />}
		</AuthContext.Consumer>
	</AuthProvider>,
	document.getElementById("root")
);
