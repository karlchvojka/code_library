# Basic CSS

## Use Attribute Selectors to style Elements
  * These look like [attr=value].
  * thus [type='radio'] will apply the style to all elements that are radio buttons.

## Understanding Absolute vs Relative Units.
  * px is an absolute unit.
  * Absolute units tie to physical units of length. For example, in and mm refers to inches and millimeters. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on the screens resolution.
  * Relative units, such as em or rem, are relative to another length value.
  * em is based on the size of the elements font. If you use it to set a font size, its relative to the parents font size.

## Inherit CSS Variables
  * :root is a pseudo-class selector that matches the root element of the document. Usually the HTML element.
  * Variables in :root will be globally accessible and can be accessed in the entire css sheet.

## Override styles in CSS
  * It doesnt matter which order the classes are listed in an HTML element. Its the order in the CSS sheet that matters.
## Questions/Things to look up
1. Using font families vs fonts. Quotes or no quotes etc.
2. css variables using the '--' syntax?
