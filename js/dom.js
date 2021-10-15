import { arrEngToMorse, arrMorseToEng } from "./translation.js";

const domFunction = () => {
    const input = document.querySelector("input");
    const btnEng = document.querySelector("#btn--eng");
    const btnMorse = document.querySelector("#btn--morse");
    const errorInput = document.querySelector("#errorInput");
    const btnReset = document.querySelector("#btn--reset");

    // user types letter => the value gets translated into either en/morse => displays into input

    btnMorse.addEventListener("click", () => {
        try {
            const transValue = arrEngToMorse(input.value);
            input.value = transValue;
            errorInput.innerText = "";
        } catch (error) {
            errorInput.innerText = error;
        }
        // if (transValue.includes("❌")) {
        //     errorInput.innerText = transValue;
        // } else {
        //     input.value = transValue;
        //     errorInput.innerText = "";
        // }
    });

    btnEng.addEventListener("click", () => {
        try {
            const transValue = arrMorseToEng(input.value);
            input.value = transValue;
            errorInput.innerText = "";
        } catch (error) {
            errorInput.innerText = error;
        }

        // const valueTrans = arrMorseToEng(input.value);
        // if (valueTrans.includes("❌")) {
        //     errorInput.innerText = valueTrans;
        // } else {
        //     input.value = valueTrans;
        //     errorInput.innerText = "";
        // }
    });
    btnReset.addEventListener("click", () => {
        input.value = "";
        errorInput.innerText = "";
    });
};

export { domFunction };
