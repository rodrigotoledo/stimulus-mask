"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMask = void 0;
var applyMask = exports.applyMask = function applyMask(value, maskFormat) {
  if (!maskFormat) return value;
  var cleanedValue = value.replace(/\\/g, '');
  var formattedValue = "";
  var valueIndex = 0;
  for (var i = 0; i < maskFormat.length; i++) {
    if (maskFormat[i] === "9") {
      if (valueIndex < cleanedValue.length && /[0-9]/.test(cleanedValue[valueIndex])) {
        formattedValue += cleanedValue[valueIndex];
        valueIndex++;
      } else {
        break;
      }
    } else if (maskFormat[i] === "#") {
      if (valueIndex < cleanedValue.length) {
        formattedValue += cleanedValue[valueIndex];
        valueIndex++;
      } else {
        break;
      }
    } else if (maskFormat[i] === "\\") {
      i++;
      if (i < maskFormat.length) {
        formattedValue += maskFormat[i];
      }
    } else {
      formattedValue += maskFormat[i];
      if (cleanedValue[valueIndex] === maskFormat[i]) {
        valueIndex++;
      }
    }
  }
  return formattedValue;
};