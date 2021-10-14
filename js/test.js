// sum function, parameter: 2 numbers
// sum (1,1,)=> 2;
// sum()=> 0;
// sum(7)=>7;
// sum(3.124,5.123)=> someting
// sum("123", "123")=> Error
// sum({},{})=> Error

import { arrEngToMorse, arrMorseToEng } from "./translation";

//     it("should return 0 for 0 arguments", () => {
//         expect(sum()).toBe(0);
//     });
//     it("should return a if b is undefine", () => {
//         expect(sum(7)).toBe(7);
//         expect(sum(10)).toBe(10);
//         expect(sum(2.14124)).toBe(2.14124);
//     });
//     it("should return an error, if arguments are not numbers", () => {
//         const error = new Error("Arguments must be numbers");

//         // when catching an error, we need to pass a function to expect otherwise the exception will crash our test
//         expect(() => sum("123", "123")).toThrowError(error);
//         expect(() => sum({}, {})).toThrowError(error);
//         expect(() => sum("123", 7)).toThrowError(error);
//     });
// });

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
