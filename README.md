# Meetings Widget Code Generator

Welcome to our WXSD DEMO Repo! <!-- Keep this here --> 

This app generates an HTML code for the user to embed the meetings widget into their application. It allows users to customize the meeting controls, layout, styles and other properties that appear while in the meeting and before joining the meeting.

[![Meetings Widget Code Generator Demo](https://img.youtube.com/vi/iVx6cN02sNM/sddefault.jpg)](https://app.vidcast.io/share/8abd7f34-b634-4a40-aeb0-dd97e4ff3523, "Meeings Widget Code Generator")

## Table of Contents

<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>(click to expand)</summary>
    
  * [Overview](#overview)
  * [Description](#description)
  * [Setup](#setup)
  * [Demo](#demo)
  * [License](#license)  
  * [Disclaimer](#disclaimer)
  * [Questions](#questions)

</details>
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->
 
## Overview

Meetings widget code generator uses ReactJS for the front-end. This app uses the 'react-code-blocks' library to generate an HTML code based on the selected customization option. Once the user submits the access token (can be obtained from [here](https://developer.webex.com/docs/getting-started)) and the destination token, the meeting is rendered by the side with default controls for preview.

The different customization options include,
* In-meeting controls (controls that appear while in the meeting)
* Interstitial controls (controls that appear before joining the meeting)
* Layout (grid, overlay, stack, prominent, focus)
* Draggable (by default, the widget is draggable)
* Styles (width and height options)

The user will be able to obtain an HTML code inside the code generator block for the selected options which the user can embed in their application.


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

### Prerequisites & Dependencies: 

- Developed and tested on MacOs Ventura(13.2.1) and Windows 11
- React version >17.0.2 (recommended)

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
## Demo

<!-- Insert link to the website below (if deployed). -->
Check out our live demo, available [here](<https://app.vidcast.io/share/8abd7f34-b634-4a40-aeb0-dd97e4ff3523>)!

<!-- Keep the following statement -->
*For more demos & PoCs like this, check out our [Webex Labs site](https://collabtoolbox.cisco.com/webex-labs).

## License
<!-- MAKE SURE an MIT license is included in your Repository. If another license is needed, verify with management. This is for legal reasons.--> 

<!-- Keep the following statement -->
All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer
<!-- Keep the following here -->  
 Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex usecases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=RepoName) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 
