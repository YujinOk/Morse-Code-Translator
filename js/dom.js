import { arrEngToMorse, arrMorseToEng } from "./translation.js";

const domFunction = () => {
    const input = document.querySelector("input");
    const btnEng = document.querySelector("#btn--eng");
    const btnMorse = document.querySelector("#btn--morse");

    // user types letter => the value gets translated into either en/morse => displays into input

    btnMorse.addEventListener("click", () => {
        const transValue = arrEngToMorse(input.value);
        input.value = transValue;
        console.log();
    });

    btnEng.addEventListener("click", () => {
        const valueTrans = arrMorseToEng(input.value);
        input.value = valueTrans;
    });
};

export { domFunction };
