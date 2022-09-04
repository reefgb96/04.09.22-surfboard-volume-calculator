"use strict";

export const calcVolume = () => {
  let lengthRange = document.querySelector(".slider-length");
  let widthRange = document.querySelector(".slider-width");
  let thicknessRange = document.querySelector(".slider-thickness");

  let lengthDis = document.querySelector("#length-value");
  let widthDis = document.querySelector("#width-value");
  let thicknessDis = document.querySelector("#thickness-value");
  let outputRange = document.querySelector("#output-value");
  let typeOfBoard = 0.556;

  let rangeSliders = document.getElementsByClassName("range");
  let checkBoxes = document.getElementsByClassName("checkbox");

  //   let lengthInch = lengthRange.value * 0.0328084;
  //   let widthInch = widthRange.value * 0.393701;
  //   let thicknessInch = thicknessRange.value * 0.393701;

  const calcFormula = () => {
    let sumDims = lengthRange.value * widthRange.value * thicknessRange.value;
    let sumVol = Math.round(sumDims * typeOfBoard) / 1000;
    outputRange.innerHTML = `Volume: ${sumVol.toFixed(2)}L`;
  };
  calcFormula();

  for (let check of checkBoxes) {
    check.oninput = () => {
      if (checkBoxes[0].checked) {
        typeOfBoard = 0.54;
        calcFormula();
      } else if (checkBoxes[1].checked) {
        typeOfBoard = 0.568;
        calcFormula();
      } else if (checkBoxes[2].checked) {
        typeOfBoard = 0.588;
        calcFormula();
      } else {
        typeOfBoard = 0.556;
        calcFormula();
      }
    };
  }

  const displayVol = () => {
    calcFormula();
    lengthDis.innerHTML = `Length: ${lengthRange.value}`;
    widthDis.innerHTML = `Width: ${widthRange.value}`;
    thicknessDis.innerHTML = `Thickness: ${thicknessRange.value}`;
    for (let slider of rangeSliders) {
      slider.oninput = () => {
        calcFormula();
        if (rangeSliders[0])
          lengthDis.innerHTML = `Length: ${lengthRange.value}`;
        if (rangeSliders[1]) widthDis.innerHTML = `Width: ${widthRange.value}`;
        if (rangeSliders[2])
          thicknessDis.innerHTML = `Thickness: ${thicknessRange.value}`;
      };
    }
  };
  displayVol();
};
