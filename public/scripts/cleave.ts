import Cleave from "cleave.js";

const input: HTMLElement = document.querySelector("input")!;

new Cleave(input, {
    delimiters: ["(", ") ", "-"],
    blocks: [0, 3, 3, 4],
});
