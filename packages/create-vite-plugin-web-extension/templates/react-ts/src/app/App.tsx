import React, { useEffect, useState } from 'react'
import browser from "webextension-polyfill";
import "./styling/app.css"
import "../utilities/tailwind.css"
import { Button } from '@chakra-ui/react';



export default function () {

   useEffect(() => {
      console.log("use-effect triggered");

   }, [])


   return (
      <>
         <h1 style={{ color: "white", textAlign: "center", paddingTop: "10px", fontSize: "20px" }}>
            App
         </h1>

         <div className='popup-div'>
            <img className="icon-image" src="https://vitejs.dev/logo-with-shadow.png" />
            {/* <img className="icon-image" src="../public/icon/128.png" /> */}
            <h1 className='h1-text'>vite-plugin-web-extension</h1>
            <p className='p-text'>
               Template: <code>react-ts v2.4</code>
            </p>
            <button className='bg-brand-1 text-red'>
               Test Button
            </button>

            <Button bg={"or.1"} color={"white"} borderRadius={"5px"}>Button</Button>
         </div>

      </>
   )
}
