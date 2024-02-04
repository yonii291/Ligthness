// app.js
import { Color } from "./src/modules/Color.js";

const inputColor = document.querySelector("input[type='text']");
const background = document.body.style.backgroundColor;
inputColor.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        e.preventDefault()
        console.log(inputColor.value);
    }
});

const containerElement = document.querySelector("main");
const color = new Color([0, 143, 79]);
color.display(containerElement);









// });
// const transformRBG = (hex) => {
//     const hexValue = hex.replace("#", "");
//     const red = parseInt(hexValue.substring(0, 2), 16);
//     const green = parseInt(hexValue.substring(2, 4), 16);
//     const blue = parseInt(hexValue.substring(4, 6), 16);

//     return {
//         red: red,
//         green: green,
//         blue: blue,
//     };


// };
