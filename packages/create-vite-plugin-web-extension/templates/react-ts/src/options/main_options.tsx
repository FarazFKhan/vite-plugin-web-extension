import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"; // Import createRoot
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ChakraTheme from "../utilities/ChakraTheme";
import Options from "./Options";

//  M1  Testing ------------------------------
import App from "../app/App";
import "../app/styling/main.css"
// --------------------------------------------

console.log("options location", window.location.pathname);

const optionsRoot = document.getElementById('options-app');
if (optionsRoot) {
   // Use the new createRoot API
   const root = createRoot(optionsRoot);

   root.render(
      <React.StrictMode>

         <ChakraProvider theme={ChakraTheme}>
            <Options />
         </ChakraProvider>

      </React.StrictMode>
   );
}

// //  M1  Testing ------------------------------
const appRoot = document.getElementById('my-app');
if (appRoot) {
   // Use the new createRoot API
   const root = createRoot(appRoot);

   root.render(
      <React.StrictMode>

         <ChakraProvider theme={ChakraTheme}>
            <App />
         </ChakraProvider>

      </React.StrictMode>
   );
}
// --------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";
// import Options from "./Options"

// console.log("popup location", window.location.pathname)

// const optionsRoot = document.getElementById('options-app');
// if (optionsRoot) {
//    ReactDOM.render(
//       <React.StrictMode>
//          <Options />
//       </React.StrictMode>
//       , optionsRoot
//    );
// }
