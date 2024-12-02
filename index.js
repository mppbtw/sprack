const fs = require("fs");
const path = require("path");
const canvas = require("canvas");
const size = require("image-size");

// Assumes squareness
function calculateSheetDimensions(spriteWidth, spriteHeight) {
    area = spriteWidth * spriteHeight;
    return Math.ceil(Math.sqrt(area));
}

async function pack(inputFiles, outputPng, outputJson) {
    const spriteWidth = Math.max(...inputFiles.map(f => {
        size.imageSize(f).width;
    }));
    const spriteHeight = Math.max(...inputFiles.map(f => {
        size.imageSize(f).height;
    }));

    const sheetLength = calculateSheetDimensions(spriteWidth, spriteHeight);
    const c = canvas.createCanvas(sheetLength, sheetLength);
    const ctx = c.getContext("2d");

    const json = {};
    for (const input of inputFiles) {
        const image = fs.readFileSync(input);
        
    }
}
