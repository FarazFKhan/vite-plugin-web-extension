import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ChakraTheme from "../utilities/ChakraTheme";
import App from "./App";
import "./styling/main.css";


console.log("app location", window.location.pathname);

// M2  Actual Build ------------------------------

if (window.location.pathname !== '/src/popup/popup.html') {

   const appRoot = document.createElement('div');
   appRoot.id = "my-app";
   document.body.append(appRoot);

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





