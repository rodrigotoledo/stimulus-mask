import { Controller } from "@hotwired/stimulus"
import { applyMask } from "../maskUtils"

export default class extends Controller {
  mask(event) {
    const input = event.target;
    const maskFormat = input.getAttribute("data-mask-format");
    if (!maskFormat) return;

    let value = input.value;
    if (event.inputType === 'deleteContentBackward') {
      value = value.slice(0, -1);
    }

    input.value = applyMask(value, maskFormat);
  }
}
