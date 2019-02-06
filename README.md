# elr-scss-animations

[![Build Status](https://travis-ci.org/Beth3346/elr-scss-animations.svg?branch=master)](https://travis-ci.org/Beth3346/elr-scss-animations)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-animations.svg?style=flat)]()

- Smoothly transition elements in and out of view
- Slide down
- Rotate
- Flip

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-animations --save
```

```sh
yarn add elr-scss-animations
```

## Usage

### elr-fade

the elr-fade mixin shows and hides an element on hover.

```scss
@import '~elr-scss-animations/src/fade';

.elr-fade-out {
  @include elr-fade();
}

.elr-fade-in {
  @include elr-fade(
    $config: (
      type: show
    )
  );
}
```

```html
<div class="elr-fade-in">
  <div class="elr-fade-item box">
    <p>Now you can see me</p>
  </div>
</div>

<div class="elr-fade-out">
  <div class="elr-fade-item box">
    <p>Now you can see me</p>
  </div>
</div>
```

### elr-spin

### elr-flipper

The elr-flipper mixin adds an 'active' class to an element to create a 'flip' effect.
If the element with class 'elr-flipper-container' has the active class the element with the class of 'elr-flipper-back' is visible.

You must implement the active class toggle event yourself.

```scss
@import '~elr-scss-animations/src/flipper';

.elr-flipper {
  @include elr-flipper;
}
```

```html
<div class="elr-flipper">
  <div
    class="elr-flipper-container active elr-flipper-circle-container"
    role="button"
    aria-pressed="true"
  >
    <div class="elr-flipper-front elr-flipper-circle-front">
      <p>Click Here</p>
    </div>
    <div class="elr-flipper-back elr-flipper-circle-back">
      <p>This is some circle content</p>
    </div>
  </div>
</div>
```

### elr-slide

## License

SEE LICENSE IN LICENSE.md
