import React from 'react';
import { useEffect } from 'react';
import "./styling/popup.css";
import "../utilities/tailwind.css"
import { Button } from '@chakra-ui/react';


export default function () {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <div className='popup-div'>
      <img className="icon-image" src="/icon-with-shadow.svg" />
      {/* <img className="icon-image" src="../public/icon/128.png" /> */}
      <h1 className='h1-text'>vite-plugin-web-extension</h1>
      <p className='p-text'>
        Template: <code>react-ts v2.1</code>
      </p>
      <button className='bg-blue-500 text-white'>Hello</button>
      <Button bg={"or.1"} color={"white"} borderRadius={"5px"}>Button</Button>

    </div>
  )
}
