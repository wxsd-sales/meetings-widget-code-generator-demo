# Meetings Widget Code Generator

This app generates an HTML code for the user to embed the meetings widget into their application. It allows users to customize the meeting controls, layout, styles and other properties that appear while in the meeting and before joining the meeting.

## Overview

Meetings widget code generator uses ReactJS for the front-end. This app uses the 'react-code-blocks' library to generate an HTML code based on the selected customization option. Once the user submits the access token (can be obtained from [here](https://developer.webex.com/docs/getting-started)) and the destination token, the meeting is rendered by the side with default controls for preview.

The different customization options include,
* In-meeting controls (controls that appear while in the meeting)
* Interstitial controls (controls that appear before joining the meeting)
* Layout (grid, overlay, stack, prominent, focus)
* Draggable (by default, the widget is draggable)
* Styles (width and height options)

The user will be able to obtain an HTML code inside the code generator block for the selected options which the user can embed in their application.

## Video Demo
[![Meetings Widget Code Generator Demo](https://img.youtube.com/vi/iVx6cN02sNM/sddefault.jpg)](https://www.youtube.com/embed/iVx6cN02sNM, "Meeings Widget Code Generator")

## Description

The users can customize the controls used by their meetings widget. The different customization options include,
* In-meeting controls 
* Interstitial controls
* Layout
* Draggable (by default, the widget is draggable)
* Styles

### In-meeting controls

The controls that appear while the meeting is ‘in-meeting’ which include, 
* mute-audio
* mute-video
* share-screen
* member-roster
* settings
* leave-meeting

### Interstitial controls

The controls that appear when not joined or before joining the meeting (ie., the Interstitial phase) include,
* mute-audio
* mute-video
* settings
* join-meeting

### Layout

The different layout options are grid, overlay, stack, prominent, and focus.
* Grid (default) - It divides the meeting participants into equal segments enhancing the visibility of the speaker and other participants.
* Overlay - It overlays other participants at the bottom while overlaying the active speaker prominently.
* Stack - It is similar to overlay but instead of the participants stacking at the bottom, they are placed on top of the speaker.
* Prominent - It focuses on the speaker while displaying the participants around the speaker.
* Focus - It focuses only on the speaker while all other participants are hidden until they take over as an active speakers.

### Draggable

This property allows the user to choose if they want the meetings widget to be draggable or not.

### Styles 

This property allows the user to specify the height and width of the meetings widget.


## Setup

**1.** Clone the project
```
git clone https://github.com/wxsd-sales/meetings-widget-code-generator-demo.git
```

**2.** Install necessary packages
```
npm install
```

**3.** Start your React app
```
npm start
```

## License

Distributed under the MIT License. See LICENSE for more information.


## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?cc=<nivjayak>@cisco.com&subject=meetings-widget-code-generator-demo).
