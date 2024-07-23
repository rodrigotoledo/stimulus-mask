# Stimulus Mask

Stimulus controller for dynamic input masking with digit and character recognition.

## Installation

To install this package, use npm or yarn:

```bash
npm install stimulus-mask
```

or

```bash
yarn add stimulus-mask
```

## Usage

Import and use the `mask_controller.js` in your Stimulus application:

```jsx
import MaskController from "stimulus-mask"
application.register("mask", MaskController)
```

Include the data-controller attribute in your HTML to apply the mask:

```html
<h1>Stimulus Mask Demo</h1>
<div data-controller="mask">
  <input type="text" data-action="input->mask#mask" data-mask-format="999.999.999-99" placeholder="CPF" />
  <input type="text" data-action="input->mask#mask" data-mask-format="99\\9.999.999-99" placeholder="CPF with number 9" />
  <input type="text" data-action="input->mask#mask" data-mask-format="####-####" placeholder="Anything" />
  <input type="text" data-action="input->mask#mask" data-mask-format="\\#9-999\\#" placeholder="Should have # and digits" />
</div>
```

## Tests

Runs the test suite using Jest.

```bash
npm test
```

## Repository

Find the repository on GitHub:

https://github.com/rodrigotoledo/stimulus-mask

## Demo applications

Ruby on rails application demo:

https://github.com/rodrigotoledo/stimulus_mask_rails_demo

React application demo:

https://github.com/rodrigotoledo/stimulus_mask_react_demo

React Native application demo:

https://github.com/rodrigotoledo/stimulus_mask_react_native_demo

### Keywords

#stimulus #mask #input #dynamic #format