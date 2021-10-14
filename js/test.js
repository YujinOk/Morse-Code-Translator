// sum function, parameter: 2 numbers
// sum (1,1,)=> 2;
// sum()=> 0;
// sum(7)=>7;
// sum(3.124,5.123)=> someting
// sum("123", "123")=> Error
// sum({},{})=> Error

// Why do we test?
// To make sure things work
// Define function behaviour
// so we can make changes safely
// Indirect, force us to write pure functions (only relies on input not global scope)

import { morse, morseToEng, engToMorse } from "./script.js";

// test("that the sum function adds two numbers together", () => {
//     const total = sum(1, 10);

//     expect(total).toBe(11);
// });
// test("that 1+11,15", () => {
//     const total = sum(1, 11);

//     expect(total).toBe(12);
// });

// describe("Test cases for sum functions", () => {
//     it("should give a valid sum for 2 numers", () => {
//         expect(sum(1, 2)).toBe(3);
//         expect(sum(10, 20)).toBe(30);
//         expect(sum(11, 3)).toBe(14);
//     });
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

// Error cases
// user types number
//
describe("Test cases for morse translator functions", () => {
    it("should return translation of morse code into English letters", () => {
        expect(morse(".-")).toBe("A");
        expect(morse("-...")).toBe("B");
        expect(morse("-.-. .")).toBe("CE");
        expect(morse(".- -... -.-. -..")).toBe("ABCD");
    });
});

describe("Test cases for morse translator functions", () => {
    it("should throw error if input is number in a string", () => {
        expect(() => morse("123")).toThrowError(Error);
        expect();
    });
});
