import { Application } from "stimulus"
import MaskController from "../src/controllers/mask_controller"

document.body.innerHTML = `
  <div data-controller="mask">
    <input type="text" data-action="input->mask#mask" placeholder="Test">
  </div>
`

describe("MaskController", () => {
  let application

  beforeAll(() => {
    application = Application.start()
    application.register("mask", MaskController)
  })

  test("formats input value with digits and literals", () => {
    const input = document.querySelector("input")
    input.setAttribute("data-mask-format", "999.999.999-99")
    input.value = "12345678901"
    input.dispatchEvent(new Event("input"))

    expect(input.value).toBe("123.456.789-01")
  })

  test("formats input value with escaped digits", () => {
    const input = document.querySelector("input")
    input.setAttribute("data-mask-format", "99\\9.999.999-99")
    input.value = "12345678901"
    input.dispatchEvent(new Event("input"))

    expect(input.value).toBe("129.345.678-90")
  })

  test("formats input value with any characters", () => {
    const input = document.querySelector("input")
    input.setAttribute("data-mask-format", "####-####")
    input.value = "abcd1234"
    input.dispatchEvent(new Event("input"))

    expect(input.value).toBe("abcd-1234")
  })

  test("formats input value with escaped hash", () => {
    const input = document.querySelector("input")
    input.setAttribute("data-mask-format", "\\#9-999\\#")
    input.value = "1234567"
    input.dispatchEvent(new Event("input"))

    expect(input.value).toBe("#1-234#")
  })
})
