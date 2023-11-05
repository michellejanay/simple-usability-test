// // place files you want to import through the `$lib` alias in this folder.
// let responses = {};
// export let selectedRadioValue = "";
// export let error = "";
// let selectedRadioName = "";

// export const handleChange = (e) => {
//   selectedRadioValue = e.target.value;
//   selectedRadioName = e.target.name;
// };

// export const handleNextQuestionClick = (url, userResponse, e) => {
//   switch (true) {
//     case url.slug === "question-1":
//       if (selectedRadioName !== "response1") {
//         e.preventDefault();
//         error = "***Make a selection to continue";
//       } else {
//         error = "";
//         responses.response1 = selectedRadioValue;
//       }
//       break;
//     case url.slug === "instruction":
//       break;
//     case url.slug === "desktop-1" || url.slug === "mobile-1":
//       checkResponseLength(userResponse, e);
//       responses.response2 = userResponse;
//       break;
//     case url.slug === "desktop-2" || url.slug === "mobile-2":
//       checkResponseLength(userResponse, e);
//       responses.resonse3 = userResponse;
//       break;
//     case url.slug === "question-4":
//       if (selectedRadioName !== "preference-question") {
//         e.preventDefault();
//         error = "***Make a selection to continue";
//       } else {
//         error = "";
//         responses.userPreference = selectedRadioValue;
//       }
//       break;
//     case url.slug === "thank-you":
//       break;
//   }
// };

// const checkResponseLength = (userResponse, e) => {
//   // if (!userResponse || userResponse.length < 30) {
//   //   e.preventDefault();
//   //   error = "Please use a minimum of 30 characters";
//   // } else {
//   //   error = "";
//   // }
// };

// let data = {};
import { writable } from "svelte/store";

export const data = [];

export const saveResponse = (response, i) => {
  data.push(response);
};
