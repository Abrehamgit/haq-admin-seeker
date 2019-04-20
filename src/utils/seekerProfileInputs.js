const inputStyles = {
  background: "#FFFFFF",
  height: "45px",
  width: "100%",
  fontSize: "14px",
  boxShadow: " 0px 1px 5px rgba(42, 49, 55, 0.05)",
  borderRadius: "6px",
  color: "rgba(42, 49, 55, 0.9)",
  fontWeight: "700"
};

export const seekerProfileInputs = [
  {
    type: "input",
    inputType: "text",
    name: "firstName",
    inputSize: "20",
    placeholder: "First name",
    label: "First Name",
    required: true,
    style: inputStyles
  },
  {
    type: "input",
    inputType: "text",
    name: "lastName",
    inputSize: "20",
    placeholder: "Last name",
    label: "Last Name",
    required: true,
    style: inputStyles
  },
  {
    type: "input",
    inputType: "email",
    disabled: true,
    name: "email",
    placeholder: "example@gmail.com",
    label: "Email",
    required: true,
    style: inputStyles
  },
  {
    type: "input",
    inputType: "number",
    name: "phone",
    inputSize: "20",
    placeholder: "(000) 000-0000",
    label: "Phone",
    required: true,
    style: {
      ...inputStyles,
      ...{
        width: "100%",
        outline: "none ",
        marginBottom: "0px"
      }
    }
  },
  {
    type: "input",
    inputType: "number",
    name: "experienceYear",
    placeholder: "Experience years",
    label: "How many years of experience do you have  ?",
    required: true,
    style: inputStyles
  },
  {
    type: "input",
    inputType: "text",
    name: "location",
    placeholder: "Location",
    label: "What city are you located in ?",
    required: true,
    style: inputStyles
  },
  {
    type: "dynamicInput",
    name: "locations",
    style: inputStyles
  }
];
