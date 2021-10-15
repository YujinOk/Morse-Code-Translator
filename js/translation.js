import { morseToEngDict, engToMorseDict } from "./dictionary.js";

// const morseSingle = ".../---/...";
// const morseDouble = "... --- ... / ... --- ...";
// const morseTripple = "--.- -... -.-. .";
// REMI => r e m i /

const morseToEngTranslation = (input) => {
    if (!morseToEngDict.hasOwnProperty(input)) {
        console.log("Does not exist!");
    } else {
        return morseToEngDict[input];
    }
};

const engToMorseTranslation = (input) => {
    const inputUpperCase = input.toUpperCase();
    if (!engToMorseDict.hasOwnProperty(inputUpperCase)) {
        return;
    } else {
        return engToMorseDict[inputUpperCase];
    }
};

const arrMorseToEng = (input) => {
    if (/[A-Z]+/gi.test(input)) {
        throw new Error("❌ Please enter English or Morse code separately!");
    }
    return input
        .split(" ")
        .map((morseLetter) => {
            return morseToEngTranslation(morseLetter);
        })
        .join("");
};
// console.log(arrMorseToEng("... / --- / ..."));
// const engToSingleMorse = "A";
// const engToDoubleMorse = "AB";
// const engToMultipleMorse = "A B C D";
// const engWordToMorse = "monkey banana";

const arrEngToMorse = (input) => {
    if (/[.\-]/g.test(input)) {
        throw new Error("❌ Please enter English or Morse code separately!");
    }

    return (
        input
            // replacing all spaces into [/] to represent the space in morse code
            .replace(/[ ]/g, "/")
            // split the string into each character to make it easier to translate into morse code
            .split("")
            .map((engLetter) => {
                return engToMorseTranslation(engLetter);
            })
            // had to put space between each letter to make morse code follow the rule as well as translate back into English
            .join(" ")
    );
};

// const testEng = "hello monkey what are you doing?";
// const testOutput = testEng.replace(/[ ]/g, "/").split("");
// console.log(testOutput);

// 1. Grab the input
// 2. Store that value
// 3. Check whether the value is English letter of Morse code
// 4. Provide user feedback (translation || throw Error!)

//    Translation process
//  if its English, break them down (e.g.split?)into letters, if it was from Morse => Eng, English will have to join letter words, sentence?
// {Key= morse  Value: English}

// if English words have space => morsecode should be spitted by (/)
// e.g. "monkey banana"=> a way of checking whetehr that is space
// then it needs to translate into (/) first before splitting and translating

export { arrEngToMorse, arrMorseToEng };
