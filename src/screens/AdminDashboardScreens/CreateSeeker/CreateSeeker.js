import React, { Component } from "react";
import { Input, Form, Select, message } from "antd";
import styles from "./index.module.css";
// import { validate, checkIfErrors } from "../../../utils/validate";
import { profileInputState } from "../../../utils/profileInputState";
import { seekerProfileInputs } from "../../../utils/seekerProfileInputs";

const FormItem = Form.Item;

const Option = Select.Option;

const locations = ["Addis Ababa", "Hawassa", "Dire Dawa", "Bahirdar", "Harar"];

let children = locations.map(item => <Option key={item}> {item} </Option>);

class CreateSeeker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: profileInputState,
			currentWork: "", // input,
			degree: "", // input
			hasError: false
		};
	}

	handleChange = event => {
		const fields = this.state.fields;

		const value = event.target.value;
		if (event.target.name === "details") {
			let wordCount = 0;
			for (let i = 0; i < value.length; i++) {
				if (value[i] === " ") wordCount++;
			}
			if (wordCount > 150) {
				message.warning("Max word count reached.");
				return;
			}
		}

		fields[event.target.name].value = event.target.value;
		this.setState({ ...this.state, fields });

		// 		if (this.state.hasError) {
		// 			const updatedFields = validate(fields, "application");
		// 			this.setState({ ...this.state, updatedFields });
		//
		// 			if (!checkIfErrors(this.state.fields))
		// 				this.setState({ hasError: false });
		// 		}
	};

	handleSelectChange = event => {
		console.log(event);
	};

	/*************  delete added values for current works and degree ***********/
	removeFormValue = (state, value) => {
		const filtered = this.state.fields[state].value.filter(
			item => item !== value
		);
		const fields = this.state.fields;
		fields[state].value = filtered;
		this.setState({ ...this.state, fields });
	};

	/******** add values for current works and degree ********/

	appendFormValue = (e, name, state) => {
		const fields = this.state.fields;
		const value = fields[name]["value"];
		fields[state]["value"] = [...fields[state]["value"], value];
		fields[name]["value"] = "";
		this.setState({
			...this.state,
			fields
		});
	};

	render() {
		let form = seekerProfileInputs.map(item => {
			if (item.type === "input") {
				return (
					<div className={styles["form-container"]}>
						<FormItem
							validateStatus={
								this.state.fields[item.name]["validateStatus"]
							}
							help={this.state.fields[item.name]["errorMsg"]}
							className={styles[item.className]}
						>
							<Input
								type={item.inputType}
								name={item.name}
								placeholder={item.placeholder}
								value={this.state.fields[item.name].value}
								onChange={this.handleChange}
								style={item.style}
							/>
						</FormItem>
					</div>
				);
			} else {
				return (
					<FormItem>
						<h3 style={{ color: "rgba(0,0,0,0.7)" }}>
							{" "}
							Locations prefered by seeker
						</h3>
						<Select
							mode="tags"
							size={5}
							placeholder="Please select"
							onChange={this.handleSelectChange}
							style={{ width: "100%" }}
						>
							{children}
						</Select>
					</FormItem>
				);
			}
		});
		return (
			<div className={styles["container"]}>
				<div className={styles["inner"]}>
					{form} <button> Submit </button>{" "}
				</div>
			</div>
		);
	}
}

export default CreateSeeker;
