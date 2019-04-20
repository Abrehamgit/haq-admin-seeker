// import validator from "validator";
//
// export const validate = (fields, formType) => {
//   switch (formType) {
//     case "application":
//       /*************** First Name ********************/
//       if (
//         validator.isNumeric(fields.firstName.value) ||
//         fields.firstName.value.length === 0
//       ) {
//         fields.firstName.validateStatus = "error";
//         fields.firstName.errorMsg = "Please provide a valid first name.";
//       } else if (
//         !validator.isNumeric(fields.firstName.value) &&
//         fields.firstName.value.length > 0
//       ) {
//         fields.firstName.validateStatus = "success";
//         fields.firstName.errorMsg = "";
//       }
//
//       /*************** Last Name ***********************/
//       if (
//         validator.isNumeric(fields.lastName.value) ||
//         fields.lastName.value.length === 0
//       ) {
//         fields.lastName.validateStatus = "error";
//         fields.lastName.errorMsg = "Please provide a valid last name.";
//       } else if (
//         !validator.isNumeric(fields.lastName.value) &&
//         fields.lastName.value.length > 0
//       ) {
//         fields.lastName.validateStatus = "success";
//         fields.lastName.errorMsg = "";
//       }
//
//       /************ Phone ************/
//       if (fields.phone.value.length >= 8 && fields.phone.value.length < 16) {
//         fields.phone.validateStatus = "success";
//         fields.phone.errorMsg = "";
//       } else if (
//         fields.phone.value.length < 8 ||
//         fields.phone.value.length > 18
//       ) {
//         fields.phone.validateStatus = "error";
//         fields.phone.errorMsg = "Please add a valid phone number";
//       }
//
//       /***************** Details *****************/
//
//       if (fields.details.value.length === 0) {
//         fields.details.validateStatus = "error";
//         fields.details.errorMsg = "this field can not be empty";
//       } else if (fields.details.value.length > 0) {
//         fields.details.validateStatus = "success";
//         fields.details.errorMsg = "";
//       }
//
//       /****************** Reason **************/
//       if (fields.reason.value.length === 0) {
//         fields.reason.validateStatus = "error";
//         fields.reason.errorMsg = "Please fill out the field";
//       } else if (fields.reason.value.length > 0) {
//         fields.reason.validateStatus = "success";
//         fields.reason.errorMsg = "";
//       }
//
//       /************** Website  **************/
//
//       if (validator.isURL(fields.website.value)) {
//         fields.website.validateStatus = "success";
//         fields.website.errorMsg = "";
//       } else if (!validator.isURL(fields.website.value)) {
//         fields.website.validateStatus = "error";
//         fields.website.errorMsg = "Please provide a valid url";
//       }
//
//       /************* Location **********************/
//
//       if (!validator.isEmpty(fields.location.value)) {
//         fields.location.validateStatus = "success";
//         fields.location.errorMsg = "";
//       } else if (validator.isEmpty(fields.location.value)) {
//         fields.location.validateStatus = "error";
//         fields.location.errorMsg = "Please add a valid address";
//       }
//
//       /************** Youtube **************/
//
//       if (
//         validator.isURL(fields.youtubeUrl.value) &&
//         !validator.isEmpty(fields.youtubeUrl.value)
//       ) {
//         fields.youtubeUrl.validateStatus = "success";
//         fields.youtubeUrl.errorMsg = "";
//       } else if (
//         !validator.isURL(fields.youtubeUrl.value) ||
//         validator.isEmpty(fields.youtubeUrl.value)
//       ) {
//         fields.youtubeUrl.validateStatus = "error";
//         fields.youtubeUrl.errorMsg = "Please provide a valid url";
//       }
//
//       /********** Experience year ***********/
//
//       if (
//         validator.isNumeric(`${fields.experienceYear.value}`) &&
//         !validator.isEmpty(`${fields.experienceYear.value}`)
//       ) {
//         fields.experienceYear.validateStatus = "success";
//         fields.experienceYear.errorMsg = "";
//       } else if (
//         !validator.isNumeric(fields.experienceYear.value) ||
//         validator.isEmpty(fields.experienceYear.value)
//       ) {
//         fields.experienceYear.errorMsg = "Please add a valid number";
//         fields.experienceYear.validateStatus = "error";
//       }
//
//       /************* hourse per week ***********/
//       if (
//         validator.isNumeric(`${fields.hoursPerWeek.value}`) &&
//         !validator.isEmpty(`${fields.hoursPerWeek.value}`)
//       ) {
//         fields.hoursPerWeek.validateStatus = "success";
//         fields.hoursPerWeek.errorMsg = "";
//       } else if (
//         !validator.isNumeric(fields.hoursPerWeek.value) ||
//         validator.isEmpty(fields.hoursPerWeek.value)
//       ) {
//         fields.hoursPerWeek.validateStatus = "error";
//         fields.hoursPerWeek.errorMsg = "Please add a valid number";
//       }
//
//       /************* SocialPlatforms *****************/
//
//       if (fields.socialPlatforms.value.length > 0) {
//         fields.socialPlatforms.validateStatus = "success";
//         fields.socialPlatforms.errorMsg = "";
//       } else if (fields.socialPlatforms.value.length === 0) {
//         fields.socialPlatforms.validateStatus = "error";
//         fields.socialPlatforms.errorMsg = "Please provide a valid answer";
//       }
//
//       /******************** Skills ***********************/
//
//       if (fields.skills.value.length > 0) {
//         fields.skills.validateStatus = "success";
//         fields.skills.errorMsg = "";
//       } else if (fields.skills.value.length === 0) {
//         fields.skills.validateStatus = "error";
//         fields.skills.errorMsg = "Please provide a valid answer";
//       }
//
//       /************* Resume ******************/
//       if (fields.resume.value.length > 0) {
//         fields.resume.validateStatus = "success";
//         fields.resume.errorMsg = "";
//       } else if (fields.resume.value.length === 0) {
//         fields.resume.validateStatus = "error";
//         fields.resume.errorMsg = "Please upload resume";
//       }
//
//       /*************** Portfolio *****************/
//       if (fields.portfolio.value.length > 0) {
//         fields.portfolio.validateStatus = "success";
//         fields.portfolio.errorMsg = "";
//       } else if (fields.portfolio.value.length === 0) {
//         fields.portfolio.validateStatus = "error";
//         fields.portfolio.errorMsg = "Please upload portfolio";
//       }
//
//       break;
//     case "createClient":
//       /********** Company name *************/
//       if (fields.companyName.value.length === 0) {
//         fields.companyName.errorMsg = "Company name can not be empty";
//         fields.companyName.validateStatus = "error";
//       } else if (fields.companyName.value.length > 0) {
//         fields.companyName.errorMsg = "";
//         fields.companyName.validateStatus = "success";
//       }
//
//       /********** Company website ************/
//
//       // if (!validator.isURL(fields.companyWebsite.value)) {
//       //   fields.companyWebsite.validateStatus = "error";
//       //   fields.companyWebsite.errorMsg =
//       //     "Please provide a full url like https://socionado.com";
//       // } else if (validator.isURL(fields.companyWebsite.value)) {
//       //   fields.companyWebsite.validateStatus = "success";
//       //   fields.companyWebsite.errorMsg = "";
//       // }
//
//       /************* First name ***********/
//
//       if (
//         validator.isNumeric(fields.firstName.value) ||
//         fields.firstName.value.length === 0
//       ) {
//         fields.firstName.validateStatus = "error";
//         fields.firstName.errorMsg = "Please provide a valid first name.";
//       } else if (
//         !validator.isNumeric(fields.firstName.value) &&
//         fields.firstName.value.length > 0
//       ) {
//         fields.firstName.validateStatus = "success";
//         fields.firstName.errorMsg = "";
//       }
//
//       /*************** Last Name ***********************/
//       if (
//         validator.isNumeric(fields.lastName.value) ||
//         fields.lastName.value.length === 0
//       ) {
//         fields.lastName.validateStatus = "error";
//         fields.lastName.errorMsg = "Please provide a valid last name.";
//       } else if (
//         !validator.isNumeric(fields.lastName.value) &&
//         fields.lastName.value.length > 0
//       ) {
//         fields.lastName.validateStatus = "success";
//         fields.lastName.errorMsg = "";
//       }
//       /************* Client Email ***********/
//
//       if (validator.isEmail(fields.email.value)) {
//         fields.email.validateStatus = "success";
//         fields.email.errorMsg = "";
//       } else if (!validator.isEmail(fields.email.value)) {
//         fields.email.validateStatus = "error";
//         fields.email.errorMsg = "Please add a valid email address";
//       }
//
//       /************ Client About *************/
//
//       if (fields.details.value.length === 0) {
//         fields.details.validateStatus = "error";
//         fields.details.errorMsg = "Please fill out this filled";
//       } else if (
//         fields.details.value.length < 500 &&
//         fields.details.value.length > 0
//       ) {
//         fields.details.validateStatus = "success";
//         fields.details.errorMsg = "";
//       }
//
//       /************ Phone **************/
//
//       if (fields.phone.value.length >= 8 && fields.phone.value.length < 16) {
//         fields.phone.validateStatus = "success";
//         fields.phone.errorMsg = "";
//       } else if (
//         fields.phone.value.length < 8 ||
//         fields.phone.value.length > 18
//       ) {
//         fields.phone.validateStatus = "error";
//         fields.phone.errorMsg = "Please add a valid phone number";
//       }
//
//       break;
//     case "createProject":
//       /****** Project name ***********/
//       if (fields.projectTitle.value.length === 0) {
//         fields.projectTitle.validateStatus = "error";
//         fields.projectTitle.errorMsg = "Project name can not be empty";
//       } else if (fields.projectTitle.value.length > 0) {
//         fields.projectTitle.validateStatus = "success";
//         fields.projectTitle.errorMsg = "";
//       }
//
//       /********** Details ************/
//       if (fields.details.value.length === 0) {
//         fields.details.validateStatus = "error";
//         fields.details.errorMsg = "Please fill out this filled";
//       } else if (fields.details.value.length > 0) {
//         fields.details.validateStatus = "success";
//         fields.details.errorMsg = "";
//       }
//       /************ Location ************/
//       if (`${fields.location.value}`.length === 0) {
//         fields.location.validateStatus = "error";
//         fields.location.errorMsg = "Please add a location";
//       } else if (`${fields.location.value}`.length > 0) {
//         fields.location.validateStatus = "success";
//         fields.location.errorMsg = "";
//       }
//
//       /*********** Budget ************/
//       if (
//         `${fields.budget.value}`.length === 0 ||
//         fields.budget.value === null
//       ) {
//         fields.budget.validateStatus = "error";
//         fields.budget.errorMsg = "Please add a budget";
//       } else if (`${fields.budget.value}`.length > 0) {
//         fields.budget.validateStatus = "success";
//         fields.budget.errorMsg = "";
//       }
//
//       /************ Company wesbsite **************/
//       if (
//         !validator.isURL(fields.companyWebsite.value) ||
//         fields.companyWebsite.value === 0
//       ) {
//         fields.companyWebsite.validateStatus = "error";
//         fields.companyWebsite.errorMsg =
//           "Please provide a full url like https://socionado.com";
//       } else if (validator.isURL(fields.companyWebsite.value)) {
//         fields.companyWebsite.validateStatus = "success";
//         fields.companyWebsite.errorMsg = "";
//       }
//
//       /******** Social Media list *****/
//
//       if (fields.socialMediaList.value.length === 0) {
//         fields.socialMediaList.validateStatus = "error";
//         fields.socialMediaList.errorMsg =
//           "Please choose atleast one social platform.";
//       } else if (fields.socialMediaList.value.length > 0) {
//         fields.socialMediaList.validateStatus = "success";
//         fields.socialMediaList.errorMsg = "";
//       }
//       /********* Skills required ****/
//       if (fields.skillsRequired.value.length === 0) {
//         fields.skillsRequired.validateStatus = "error";
//         fields.skillsRequired.errorMsg = "Please choose atleast one skill.";
//       } else if (fields.skillsRequired.value.length > 0) {
//         fields.skillsRequired.validateStatus = "success";
//         fields.skillsRequired.errorMsg = "";
//       }
//
//       break;
//
//     case "createProposal":
//       /***** Proposal title *********/
//       if (fields.proposalTitle.value.length === 0) {
//         fields.proposalTitle.validateStatus = "error";
//         fields.proposalTitle.errorMsg = "Please add a Proposal title";
//       } else if (fields.proposalTitle.value.length > 0) {
//         fields.proposalTitle.validateStatus = "success";
//         fields.proposalTitle.errorMsg = "";
//       }
//
//       /****** Proposal details ********/
//       if (fields.deliverables.value.length === 0) {
//         fields.deliverables.validateStatus = "error";
//         fields.deliverables.errorMsg = "Please add a proposal details.";
//       } else if (fields.deliverables.value.length > 0) {
//         fields.deliverables.validateStatus = "success";
//         fields.deliverables.errorMsg = "";
//       }
//
//       /******* price ******/
//       if (`${fields.proposalFee.value}`.length === 0) {
//         fields.proposalFee.validateStatus = "error";
//         fields.proposalFee.errorMsg = "Please add a valid price ";
//       } else if (`${fields.proposalFee.value}`.length > 0) {
//         fields.proposalFee.validateStatus = "success";
//         fields.proposalFee.errorMsg = "";
//       }
//
//       /*************** file *****************/
//       // if (fields.proposalFiles.value.length > 0) {
//       //   fields.proposalFiles.validateStatus = "success";
//       //   fields.proposalFiles.errorMsg = "";
//       // } else if (fields.proposalFiles.value.length === 0) {
//       //   fields.proposalFiles.validateStatus = "error";
//       //   fields.proposalFiles.errorMsg = "Please upload Files";
//       // }
//       break;
//
//     case "createAdmin":
//       /************* First name ***********/
//
//       if (
//         validator.isNumeric(fields.firstName.value) ||
//         fields.firstName.value.length === 0
//       ) {
//         fields.firstName.validateStatus = "error";
//         fields.firstName.errorMsg = "Please provide a valid first name.";
//       } else if (
//         !validator.isNumeric(fields.firstName.value) &&
//         fields.firstName.value.length > 0
//       ) {
//         fields.firstName.validateStatus = "success";
//         fields.firstName.errorMsg = "";
//       }
//
//       /*************** Last Name ***********************/
//       if (
//         validator.isNumeric(fields.lastName.value) ||
//         fields.lastName.value.length === 0
//       ) {
//         fields.lastName.validateStatus = "error";
//         fields.lastName.errorMsg = "Please provide a valid last name.";
//       } else if (
//         !validator.isNumeric(fields.lastName.value) &&
//         fields.lastName.value.length > 0
//       ) {
//         fields.lastName.validateStatus = "success";
//         fields.lastName.errorMsg = "";
//       }
//
//       /********************** Email *****************/
//
//       if (!validator.isEmail(fields.email.value)) {
//         fields.email.validateStatus = "error";
//         fields.email.errorMsg = "Please provide a vaid email address";
//       } else if (validator.isEmail(fields.email.value)) {
//         fields.email.validateStatus = "success";
//         fields.email.errorMsg = "";
//       }
//
//       if (fields.phone.value.length >= 8) {
//         fields.phone.validateStatus = "success";
//         fields.phone.errorMsg = "";
//       } else if (fields.phone.value.length < 8) {
//         fields.phone.validateStatus = "error";
//         fields.phone.errorMsg = "Please add a valid phone number";
//       }
//       break;
//     case "updateApplication":
//       /*************** First Name ********************/
//       if (
//         validator.isNumeric(fields.firstName.value) ||
//         fields.firstName.value.length === 0
//       ) {
//         fields.firstName.validateStatus = "error";
//         fields.firstName.errorMsg = "Please provide a valid first name.";
//       } else if (
//         !validator.isNumeric(fields.firstName.value) &&
//         fields.firstName.value.length > 0
//       ) {
//         fields.firstName.validateStatus = "success";
//         fields.firstName.errorMsg = "";
//       }
//
//       /*************** Last Name ***********************/
//       if (
//         validator.isNumeric(fields.lastName.value) ||
//         fields.lastName.value.length === 0
//       ) {
//         fields.lastName.validateStatus = "error";
//         fields.lastName.errorMsg = "Please provide a valid last name.";
//       } else if (
//         !validator.isNumeric(fields.lastName.value) &&
//         fields.lastName.value.length > 0
//       ) {
//         fields.lastName.validateStatus = "success";
//         fields.lastName.errorMsg = "";
//       }
//
//       /************ Phone ************/
//       if (fields.phone.value.length >= 8 && fields.phone.value.length < 16) {
//         fields.phone.validateStatus = "success";
//         fields.phone.errorMsg = "";
//       } else if (
//         fields.phone.value.length < 8 ||
//         fields.phone.value.length > 18
//       ) {
//         fields.phone.validateStatus = "error";
//         fields.phone.errorMsg = "Please add a valid phone number";
//       }
//
//       /***************** Details *****************/
//
//       if (fields.details.value.length === 0) {
//         fields.details.validateStatus = "error";
//         fields.details.errorMsg = "this field can not be empty";
//       } else if (fields.details.value.length > 0) {
//         fields.details.validateStatus = "success";
//         fields.details.errorMsg = "";
//       }
//
//       /************* Location **********************/
//
//       if (!validator.isEmpty(fields.location.value)) {
//         fields.location.validateStatus = "success";
//         fields.location.errorMsg = "";
//       } else if (validator.isEmpty(fields.location.value)) {
//         fields.location.validateStatus = "error";
//         fields.location.errorMsg = "Please add a valid address";
//       }
//
//       /************* SocialPlatforms *****************/
//
//       if (fields.socialPlatforms.value.length > 0) {
//         fields.socialPlatforms.validateStatus = "success";
//         fields.socialPlatforms.errorMsg = "";
//       } else if (fields.socialPlatforms.value.length === 0) {
//         fields.socialPlatforms.validateStatus = "error";
//         fields.socialPlatforms.errorMsg = "Please provide a valid answer";
//       }
//
//       /******************** Skills ***********************/
//
//       if (fields.skills.value.length > 0) {
//         fields.skills.validateStatus = "success";
//         fields.skills.errorMsg = "";
//       } else if (fields.skills.value.length === 0) {
//         fields.skills.validateStatus = "error";
//         fields.skills.errorMsg = "Please provide a valid answer";
//       }
//       /****************** Reason **************/
//       if (fields.reason.value.length === 0) {
//         fields.reason.validateStatus = "error";
//         fields.reason.errorMsg = "Please fill out the field";
//       } else if (fields.reason.value.length > 0) {
//         fields.reason.validateStatus = "success";
//         fields.reason.errorMsg = "";
//       }
//
//       /************** Website  **************/
//
//       if (validator.isURL(fields.website.value)) {
//         fields.website.validateStatus = "success";
//         fields.website.errorMsg = "";
//       } else if (!validator.isURL(fields.website.value)) {
//         fields.website.validateStatus = "error";
//         fields.website.errorMsg = "Please provide a valid url";
//       }
//
//       /************** Youtube **************/
//
//       if (
//         validator.isURL(fields.youtubeUrl.value) &&
//         !validator.isEmpty(fields.youtubeUrl.value)
//       ) {
//         fields.youtubeUrl.validateStatus = "success";
//         fields.youtubeUrl.errorMsg = "";
//       } else if (
//         !validator.isURL(fields.youtubeUrl.value) ||
//         validator.isEmpty(fields.youtubeUrl.value)
//       ) {
//         fields.youtubeUrl.validateStatus = "error";
//         fields.youtubeUrl.errorMsg = "Please provide a valid url";
//       }
//
//       /********** Experience year ***********/
//
//       if (
//         validator.isNumeric(fields.experienceYear.value.toString()) &&
//         !validator.isEmpty(fields.experienceYear.value.toString())
//       ) {
//         fields.experienceYear.validateStatus = "success";
//         fields.experienceYear.errorMsg = "";
//       } else if (
//         !validator.isNumeric(fields.experienceYear.value) ||
//         validator.isEmpty(fields.experienceYear.value)
//       ) {
//         fields.experienceYear.errorMsg = "Please add a valid number";
//         fields.experienceYear.validateStatus = "error";
//       }
//
//       /************* hourse per week ***********/
//       if (
//         validator.isNumeric(fields.hoursPerWeek.value) &&
//         !validator.isEmpty(fields.hoursPerWeek.value)
//       ) {
//         fields.hoursPerWeek.validateStatus = "success";
//         fields.hoursPerWeek.errorMsg = "";
//       } else if (
//         !validator.isNumeric(fields.hoursPerWeek.value) ||
//         validator.isEmpty(fields.hoursPerWeek.value)
//       ) {
//         fields.hoursPerWeek.validateStatus = "error";
//         fields.hoursPerWeek.errorMsg = "Please add a valid number";
//       }
//
//       /************* Resume ******************/
//       if (fields.resume.value.length > 0) {
//         fields.resume.validateStatus = "success";
//         fields.resume.errorMsg = "";
//       } else if (fields.resume.value.length === 0) {
//         fields.resume.validateStatus = "error";
//         fields.resume.errorMsg = "Please upload resume";
//       }
//
//       /*************** Portfolio *****************/
//       if (fields.portfolio.value.length > 0) {
//         fields.portfolio.validateStatus = "success";
//         fields.portfolio.errorMsg = "";
//       } else if (fields.portfolio.value.length === 0) {
//         fields.portfolio.validateStatus = "error";
//         fields.portfolio.errorMsg = "Please upload portfolio";
//       }
//
//       break;
//     default:
//       return;
//     // console.log("default");
//   }
// };
//
// export const checkIfErrors = object => {
//   let hasErrors = false;
//   Object.keys(object).forEach(key => {
//     let value = object[key].errorMsg;
//     if (value.length) {
//       hasErrors = true;
//     }
//   });
//   return hasErrors;
// };
