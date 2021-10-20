import { arrEngToMorse, arrMorseToEng } from "./translation";

describe("Test cases for Morse to English function", () => {
    it("should return translation of morse code into English letters", () => {
        expect(arrMorseToEng(".-")).toBe("A");
        expect(arrMorseToEng("-... -.-. -..")).toBe("BCD");
        expect(arrMorseToEng(".- - / .-- --- .-. -.-")).toBe("AT WORK");
    });
    it("should return translation of English letters and words into Morse code", () => {
        expect(arrEngToMorse("A")).toBe(".-");
        expect(arrEngToMorse("AB")).toBe(".- -...");
        expect(arrEngToMorse("MONKEY")).toBe("-- --- -. -.- . -.--");
        expect(arrEngToMorse("HI MONKEY")).toBe(
            ".... .. / -- --- -. -.- . -.--",
        );
    });
    describe("Test case for combination of English letter and special symbol character or Morse code and symbols", () => {});
    it("should return translation of English special charactors of ! || ? into Morse", () => {
        expect(arrEngToMorse("YO!")).toBe("-.-- --- -.-.--");
        expect(arrEngToMorse("HI?")).toBe(".... .. ..--..");
        expect(arrMorseToEng("-. -.-.--")).toBe("N!");
        expect(arrMorseToEng("-... ..--..")).toBe("B?");
    });
});
describe("Test case for error cases!", () => {
    it("should throw error if the input is a combination of English and Morse code", () => {
        expect(() => arrEngToMorse("A .----")).toThrowError(Error);
        expect(() => arrMorseToEng("B .----")).toThrowError(Error);
        expect(() => arrMorseToEng("--. A")).toThrowError(Error);
        expect(() => arrMorseToEng("-. A -.")).toThrowError(Error);
    });
    // it("should throw error if the input contains negative integer", () => {
    //     expect(() => arrEngToMorse("-1")).toThrowError(error);
    //     expect(() => arrEngToMorse("-20")).toThrowError(error);
    //     expect(() => arrEngToMorse("-100")).toThrowError(error);
});
it("should throw error if the input is empty string", () => {
    const error = new Error("Please enter English or Morse code!");
    // expect(() => arrEngToMorse("")).toThrowError(error);
    expect(() => arrMorseToEng("")).toThrowError(error);
});
it("should throw error if the input contains symbols that does not exist in the dictionary", () => {
    const error = new Error("Not found!");
});

// negative integer check if, else?

// no input? => Error! "please enter English or morse code!"
// weird symbols that my dictionary dose not have? Error! "Invalid input!"
//
