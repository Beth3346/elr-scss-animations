# elr-scss-animations

[![Build Status](https://travis-ci.org/Beth3346/elr-scss-animations.svg?branch=master)](https://travis-ci.org/Beth3346/elr-scss-animations)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-animations.svg?style=flat)]()

- Scss Mixin library for animations

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

- The elr-flipper mixin adds an 'active' class to an element to create a 'flip' effect.
- If the element with class 'elr-flipper-container' has the active class the element with the class of 'elr-flipper-back' is visible.
- You must implement the active class toggle event yourself using JavaScript

```scss
@import '~elr-scss-animations/src/flipper';

.elr-flipper {
  @include elr-flipper;
}
```

```html
<div class="elr-flipper">
  <div class="elr-flipper-container active" role="button" aria-pressed="true">
    <div class="elr-flipper-front">
      <p>Click Here</p>
    </div>
    <div class="elr-flipper-back">
      <p>This is some content</p>
    </div>
  </div>
</div>
```

### elr-slide

- The elr-slide mixin adds an 'active' class to an element to create a 'slide down' effect.
- If the element with class 'elr-slide' has the active class it is visible.
- You must implement the active class toggle event yourself using JavaScript

```scss
.elr-slide {
  @include elr-slide;
}
```

```html
<div>
  <h4>Slide Down</h4>
  <ul class="elr-slide">
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    <li>Item Four</li>
  </ul>
</div>
```

## License

SEE LICENSE IN LICENSE.md
