
let My_Current_Date = new Date();

let Days = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"];
let My_Day = Days[ My_Current_Date.getDay() ];

export {My_Day};
