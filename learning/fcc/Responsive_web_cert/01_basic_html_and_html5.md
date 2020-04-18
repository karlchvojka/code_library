# Basic HTML and HTML5

## Introduction to HTML5 Elements
  * HTML5 introduces more descriptive HTML tags. main, header, footer, nav, video, article and section.

### main
The main tag helps search enegines and other developers find the main content of your page.

### img
#### Attributes
  * The src attribute is the link to the image location
  * The alt attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
    * If the image is purely decorative, using an empty alt attribute is best practice

### Anchor Elements
#### Attributes
  * Used to link to content outside of your webpage.
  * href attribute is a destination web address.
  * All anchors need anchor text.
  * target with the "_blank" attribute will open the link in a new tab.

##### Internal linking
  * Assign the href att to a hash symbol (#) plus the value of the id attribute for another element that you want to link to.

### Input fields
  * Placeholder text is displayed in the input before your user inputted anything.

### Forms
#### For Attribute
  * Best practice to set the for attribute on the label element to match the id of the input tag.
  * Name attribute allows to set a group of radios by all of them in the group having consistant name tags.
#### Submitting
  * Clicking a submit button will send the data from your form to the url you specified with your forms action attribute.
  * When a form gets submitted, the data is sent to the server and includes entries for the options selected. Radio and Checkbox inputs report their values from the value attribute.
  * There are two radio inputs. When the user submits the form with the indoor option selected, the form data will include the line: indoor-outdoor=indoor. This is from the name and value attributes of the indoor input.
  * If you skip the value attribute, the submitted form data uses the default value, which is on. This would result in the form data including: indoor-outdoor=on, which isnt much use. Value attribute is v important.


## Questions/Things to look up
1. Lorel Ipsum text is randomly scraped from Cicero of Ancient Rome?
2. Find out all the elements that HTML5 added and what their functions are.
3. Where and how to use all of them.
4. When it comes to ULs and OLs, should I be using ptags inside of them?
5. Should I use a input element for submit buttons or a button element?
