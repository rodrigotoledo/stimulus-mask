import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  mask(event) {
    const input = event.target;
    const maskFormat = input.getAttribute("data-mask-format");
    if (!maskFormat) return;

    let value = input.value.replace(/\\/g, '');

    if (event.inputType === 'deleteContentBackward') {
      value = value.slice(0, -1);
    }

    let formattedValue = "";
    let valueIndex = 0;

    for (let i = 0; i < maskFormat.length; i++) {
      if (maskFormat[i] === "9") {
        if (valueIndex < value.length && /[0-9]/.test(value[valueIndex])) {
          formattedValue += value[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else if (maskFormat[i] === "#") {
        if (valueIndex < value.length) {
          formattedValue += value[valueIndex];
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
        if (value[valueIndex] === maskFormat[i]) {
          valueIndex++;
        }
      }
    }

    input.value = formattedValue;
  }
}
