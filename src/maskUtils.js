export const applyMask = (value, maskFormat) => {
  if (!maskFormat) return value;

  let cleanedValue = value.replace(/\\/g, '');

  let formattedValue = "";
  let valueIndex = 0;

  for (let i = 0; i < maskFormat.length; i++) {
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
}
