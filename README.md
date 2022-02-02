# demo-range-slider

Range slider demo using only Web Components standards.

The component is self-contained, customizable (via HTML attributes as well as setter methods), stylable (via CSS custom properties) and 'themable'. Changing properties are reflected by attributes. On change, the current values are also emitted via a custom event.


## Please note

This is just meant to be a technical feasibility demo. Issues:
* At the moment, component styling is ONLY done for Firefox (cf. user agent styling in other browsers). 
* Due to some sloppy math (?) it slides not yet as smooth as it should :)


## Usage

```html

<!-- Web Component instance 'demo-range-slider' - use attributes for custom value settings -->
<demo-range-slider
  layout="default"
  min="0" 
  max="100"
  current-min="20"
  current-max="80"
  cevt-name="demo-range-changed">
</demo-range-slider>

<!-- JS with component class -->
<script type="module" src="../dist/demo-range-slider.js"> </script>


```

The attributes can be used for configuration:
* `layout (default | simple)`: `default` provides text input forms with the slider, `simple` shows only the slider.
* `min` and `max` set the slider range.
* `current-min` and `current-max` set the initial values for the slider thumbs.
* `cevt-name` is the name of the custom event emitted by the component when changed.


## Styling

### Component Style API

The slider component can be styled by using the custom properties:
* `--slider-thumb-color`: Color of slider thumbs.
* `--slider-track-color`: Color of slider track (not selected).
* `--slider-progress-color`: Color of slider track (selected).


### Theme

See `theme/_colors.scss`. Use this file to define 'global' styles.



## Install

Run `npm install`.


## Build

`npm run start` builds the component and starts a server on [localhost:3000](http://localhost:3000). For testing porposes, a demo HTML page is provided at [localhost:3000/test/demo.html](http://localhost:3000/test/demo.html).
