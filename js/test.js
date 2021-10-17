import { arrEngToMorse, arrMorseToEng } from "./translation";

describe("Test cases for Morse to English function", () => {
    it("should return translation of morse code into English letters", () => {
        expect(arrMorseToEng(".-")).toBe("A");
        expect(arrMorseToEng("-... -.-. -..")).toBe("BCD");
        expect(arrMorseToEng(".- - / .-- --- .-. -.-")).toBe("AT WORK");
    });
});
describe("Test case English to Morse function", () => {
    it("should return translation of English letters and words into Morse code", () => {
        expect(arrEngToMorse("A")).toBe(".-");
        expect(arrEngToMorse("AB")).toBe(".- -...");
        expect(arrEngToMorse("MONKEY")).toBe("-- --- -. -.- . -.--");
        expect(arrEngToMorse("HI MONKEY")).toBe(
            ".... .. / -- --- -. -.- . -.--",
        );
    });
    it("should return translation of English special charactors of ! || ? into Morse", () => {
        expect(arrEngToMorse("YO!")).toBe("-.-- --- -.-.--");
        expect(arrEngToMorse("HI?")).toBe(".... .. ..--..");
    });
});
describe("Test case for error cases!", () => {
    it("should throw error if the input is a combination of English and Morse code", () => {
        expect(() => arrEngToMorse("A .----")).toThrowError(Error);
        expect(() => arrMorseToEng("B .----")).toThrowError(Error);
    });
});
