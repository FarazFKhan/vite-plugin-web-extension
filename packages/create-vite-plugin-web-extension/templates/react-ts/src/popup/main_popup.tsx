import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"; // Import createRoot
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ChakraTheme from "../utilities/ChakraTheme";
import Popup from "./Popup";

console.log("popup location", window.location.pathname)

const popupRoot = document.getElementById('popup-app');
if (popupRoot) {
  // Use the new createRoot API
  const root = createRoot(popupRoot);

  root.render(
    <React.StrictMode>

      <ChakraProvider theme={ChakraTheme}>
        <Popup />
      </ChakraProvider>

    </React.StrictMode>
  );
}

//  M1  Testting -------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";
// import Popup from "./Popup";

// console.log("popup location", window.location.pathname)

// const popupRoot = document.getElementById('popup-app');
// if (popupRoot) {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Popup />
//     </React.StrictMode>
//     , popupRoot
//   );
// }

// ----------------------------------------------------
