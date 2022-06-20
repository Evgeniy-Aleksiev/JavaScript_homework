function rgbToHexColor(red, green, blue) {

    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid 
    } 
    
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){ 
        return undefined; // Blue value is invalid 
    } 
    
    return "#" + 
        ("0" + red.toString(16).toUpperCase()).slice(-2) + 
        ("0" + green.toString(16).toUpperCase()).slice(-2) + 
        ("0" + blue.toString(16).toUpperCase()).slice(-2); 
}
// console.log(rgbToHexColor(0, 0, 0));
module.exports = { rgbToHexColor };

const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb');

describe('RGBtoHexColor', () => {
    it ('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it ('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it ('converts SoftUni blue to #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it ('converts 15, 15, 15  to #0F0F0F', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });

    it ('return undefined for missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
    });

    it ('return undefined for out of lower band', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it ('return undefined for out of upper band', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it ('return undefined for string', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    });

});