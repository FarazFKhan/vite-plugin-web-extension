import browser from "webextension-polyfill";



console.log("Content Script Running");

let data = {
   _design: [],

   _pomodoro: [],
};


const saveData = () => {
   console.log("Saving Data");

   // browser.storage.local.set(data)
   //    .then(() => {
   //       console.log("--- saved ---", data);
   //    })
   //    .catch(error => {
   //       console.error("Error saving data:", error);
   //    });
}

setTimeout(() => {
   saveData();
}, 5000);