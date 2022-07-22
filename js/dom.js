import { arrEngToMorse, arrMorseToEng } from "./translation.js";

const domFunction = () => {
    const input = document.querySelector("input");
    const btnEng = document.querySelector("#btn--eng");
    const btnMorse = document.querySelector("#btn--morse");
    const errMessage = document.querySelector("#errMessage");
    const btnReset = document.querySelector("#btn--reset");

    // user types letter => the value gets translated into either en/morse => displays into input

    btnMorse.addEventListener("click", () => {
        try {
            const transValue = arrEngToMorse(input.value);
            input.value = transValue;
            errMessage.innerText = "";
        } catch (error) {
            errMessage.innerText = error;
        }
    
    });

    btnEng.addEventListener("click", () => {
        try {
            const transValue = arrMorseToEng(input.value);
            input.value = transValue;
            errMessage.innerText = "";
        } catch (error) {
            errMessage.innerText = error;
        }

    });
    btnReset.addEventListener("click", () => {
        input.value = "";
        errMessage.innerText = "";
    });
};

export { domFunction };
