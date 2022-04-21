import React, {useState} from 'react';
import {Select, SelectOption, Input, Checkbox, CheckboxGroup, Button} from '@momentum-ui/react';
import '@momentum-ui/core/css/momentum-ui.min.css';
import Draggable from 'react-draggable';
import {CodeBlock, tomorrow, a11yDark, googlecode} from "react-code-blocks";
import './App.scss';
import background from '../assets/webex-bg-image.webp';

import {WebexMeetingsWidget} from '@webex/widgets';

import '@webex/widgets/dist/css/webex-widgets.css';

export default function App() {
    var controls=null;
    const [token, setToken] = useState('');
    const [layout, setLayout] = useState('Grid');
    const [theme, setTheme] = useState('dark');
    const [destination, setDestination] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [muteAudioIM, setMuteAudioIM] = useState(false);
    const [muteVideoIM, setMuteVideoIM] = useState(false);
    const [settingsIM, setSettingsIM] = useState(false);
    const [shareScreenIM, setShareScreenIM] = useState(false);
    const [leaveMeetingIM, setLeaveMeetingIM] = useState(false);
    const [memberRoasterIM, setMemberRoasterIM] = useState(false);
    const [muteAudioIC, setMuteAudioIC] = useState(false);
    const [muteVideoIC, setMuteVideoIC] = useState(false);
    const [settingsIC, setSettingsIC] = useState(false);
    const [joinMeetingIC, setJoinMeetingIC] = useState(false);
    const [arrNew, setArrNew] = useState([]);
    const [customizationState, setCustomizationState]= useState(false);
    const [arrNewIC, setArrNewIC] = useState([]);  
    const [accessToken, setAccessToken] = useState('');
    const [destinationToken, setDestinationToken] = useState('');
    const [draggable, setDraggable] = useState(true);

    const code =
    `<html>
        <head>
            <title>Webex Widget Demo</title>
            <link href="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/webex-widgets.css" />
            <script src="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/bundle.js"></script>
        </head>

        <body>
            <div id="meeting-widget"></div>
            <script>
                webexMeetingWidget({accessToken: "${accessToken}",
                meetingDestination: "${destinationToken}",
                theme:"${theme}",
                draggable:"${draggable}",
                width:"${width}",
                height:"${height}",
                layout:"${layout}",
                inMeetingControls:[${arrNew}],
                interstitialControls:[${arrNewIC}]});
            </script>
        </body>
    </html>`;

    const myControls = (inMeeting) => inMeeting ? ['leave-meeting'] : ['join-meeting'];

    function handleSubmit() {
        setAccessToken(token)
        setDestinationToken(destination)
    }
    function toggle(value) {
        console.log("draggable?")
        console.log(!value);
        return !value;
    }

    const handleChangeTheme = (selectedOptions) => {
        const selectedTheme = selectedOptions[0].value;
        setTheme(selectedTheme);
      };

    const handleChangeLayout = (selectedOptions) => {
        const selectedLayout = selectedOptions[0].value;
        setLayout(selectedLayout);
      };

    function arraySetter(checkboxValue, checkboxName, setFn) {
        let meetingControls = arrNew
        checkboxName = checkboxName.substring(0, checkboxName.length - 3);
        if(checkboxValue) {
            meetingControls.push(checkboxName)
        } else {
            meetingControls = meetingControls.filter(val => val != (checkboxName))
        }
        setArrNew(meetingControls)
        setFn((checkboxValue) => !checkboxValue)
    }

    function arraySetterIC(checkboxValue, checkboxName, setFnIC) {
        console.log(checkboxName)
        console.log(checkboxValue)
        let interstitialControls = arrNewIC
        checkboxName = checkboxName.substring(0, checkboxName.length - 3);
        if(checkboxValue) {
            interstitialControls.push(checkboxName)
        } else {
            console.log('inside filter IC')
            interstitialControls = interstitialControls.filter(val => val != (checkboxName))
        }
        setArrNewIC(interstitialControls)
        setFnIC((checkboxValue) => !checkboxValue)
    }

    function samplefn(event) {
        switch (event.target.value) {
            case 'mute-audio-im':
                arraySetter(!muteAudioIM, event.target.value, setMuteAudioIM)
                break;

            case 'mute-video-im':
                arraySetter(!muteVideoIM, event.target.value, setMuteVideoIM)
                break;
            
            case 'settings-im':
                arraySetter(!settingsIM, event.target.value, setSettingsIM)
                break;
            
            case 'share-screen-im':
                arraySetter(!shareScreenIM, event.target.value, setShareScreenIM)
                break;
            
            case 'leave-meeting-im':
                arraySetter(!leaveMeetingIM, event.target.value, setLeaveMeetingIM)
                break;

            case 'member-roaster-im':
                arraySetter(!memberRoasterIM, event.target.value, setMemberRoasterIM)
                break;
        }
    };

    function samplefnIC(event) {
        switch (event.target.value) {
            case 'mute-audio-ic':
                console.log("function IC")
                arraySetterIC(!muteAudioIC, event.target.value, setMuteAudioIC)
                break;

            case 'mute-video-ic':
                arraySetterIC(!muteVideoIC, event.target.value, setMuteVideoIC)
                break;
            
            case 'settings-ic':
                arraySetterIC(!settingsIC, event.target.value, setSettingsIC)
                break;
            
            case 'join-meeting-ic':
                arraySetterIC(!joinMeetingIC, event.target.value, setJoinMeetingIC)
                break;
        }
    };

    if(arrNew!='' && arrNewIC!='')
    {
      controls = (inMeeting) => inMeeting ? arrNew : arrNewIC;
    }
    else if(arrNew=='' && arrNewIC!='')
    {
      controls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : arrNewIC;
      
    }
    else if(arrNew!='' && arrNewIC=='')
    {
      controls = (inMeeting) => inMeeting ? arrNew : ['mute-audio','mute-video','settings','join-meeting'];
    }
    else{
      controls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : ['mute-audio','mute-video','settings','join-meeting'];
    }
  
  return (
      <div style={{backgroundImage:`url(${background})`}}>
          <header className='App-header'>
          <div className='outerDiv'>
                <div className='flex-child'>
                    <div>
                        {/* {console.log( "IM -> " + arrNew)}
                        {console.log( "IC -> " + arrNewIC)} */}

                        <Input
                            name='Access Token'
                            label='Access Token'
                            htmlId='defaultInput'
                            inputSize='small-10'
                            placeholder='access token'
                            value={token}
                            onChange={(event) => setToken(event.target.value)}
                        />
                        <Input
                            name='Meeting Destination'
                            label='Meeting Destination'
                            htmlId='defaultInput'
                            inputSize='small-10'
                            placeholder='meeting destination ID'
                            value={destination}
                            onChange={(event) => setDestination(event.target.value)}
                        />
                        <Button
                            children='Submit'
                            ariaLabel='Test'
                            color='blue'
                            onClick={handleSubmit}
                        />
                        {customizationState?(
                        <Button
                            children='Hide Customization Options'
                            ariaLabel='Test'
                            color='blue'
                            onClick={() => setCustomizationState(false)}
                        />):(
                        <Button
                            children='Show Customization Options'
                            ariaLabel='Test'
                            color='blue'
                            onClick={() => setCustomizationState(true)}
                        />)}
                    
                    </div>
                    {customizationState?(
                        <div>
                    <div className='form-inline'>
                        <div>
                            Layout
                        <div>
                        <Select defaultValue="Grid" onSelect={handleChangeLayout}>
                            <SelectOption value="Overlay" label="Overlay" />
                            <SelectOption value="Grid" label="Grid" />
                            <SelectOption value="Stack" label="Stack" />
                            <SelectOption value="Prominent" label="Prominent" />
                            <SelectOption value="Focus" label="Focus" />
                        </Select>
                        </div>
                        </div>
                    </div>
                    <div className='form-inline'>
                        <div>
                            
                        InMeeting Controls
                            <div className='form-inline'>
                                <div>
                                <CheckboxGroup name='CheckboxGroup1'>
                                        <Checkbox
                                            value='mute-audio-im'
                                            name='meeting-controls'
                                            label='mute-audio'
                                            htmlId='testCheckbox1'
                                            checked={muteAudioIM}
                                            onClick={(event)=> {
                                                samplefn(event);
                                            }}
                                        />
                                        <Checkbox
                                            value='mute-video-im'
                                            name='meeting-controls'
                                            label='mute-video'
                                            htmlId='testCheckbox2'
                                            checked={muteVideoIM}
                                            onClick={(event)=> {
                                                samplefn(event);
                                            }}
                                        />   
                                    </CheckboxGroup>
                                </div>
                                <div>
                                <CheckboxGroup name='CheckboxGroup2'>
                                        <Checkbox
                                            value='settings-im'
                                            label='settings'
                                            htmlId='testCheckbox3'
                                            onClick={(event)=> {
                                                samplefn(event);
                                            }}
                                        />
                                        <Checkbox
                                            value='share-screen-im'
                                            label='share-screen'
                                            htmlId='testCheckbox4'
                                            onClick={(event)=> {  
                                                samplefn(event);
                                            }}
                                        />  
                                    </CheckboxGroup>
                                </div>

                                <div>
                                <CheckboxGroup name='CheckboxGroup3'>  
                                        <Checkbox
                                            value='leave-meeting-im'
                                            label='leave-meeting'
                                            htmlId='testCheckbox5'
                                            onClick={(event)=> {
                                                samplefn(event);
                                            }}
                                        />
                                        <Checkbox
                                            value='member-roaster-im'
                                            label='member-roaster'
                                            htmlId='testCheckbox6'
                                            onClick={(event)=> {
                                                samplefn(event);
                                            }}
                                        />     
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="form-inline">
                        <div>
                        Interstitial Controls
                            <div className="form-inline">
                                <div>
                                <CheckboxGroup name='CheckboxGroup4'>
                                    <Checkbox
                                        value='mute-audio-ic'
                                        label='mute-audio'
                                        htmlId='testCheckbox7'
                                        onClick={(event)=> {
                                            samplefnIC(event);
                                        }}
                                    />
                                    <Checkbox
                                        value='mute-video-ic'
                                        label='mute-video'
                                        htmlId='testCheckbox8'
                                        onClick={(event)=> {
                                            samplefnIC(event);
                                        }}
                                    />
                                </CheckboxGroup>

                                </div>
                                <div>
                                <CheckboxGroup name='CheckboxGroup5'>
                                        <Checkbox
                                            value='settings-ic'
                                            label='settings'
                                            htmlId='testCheckbox9'
                                            onClick={(event)=> {
                                                samplefnIC(event);
                                            }}
                                        />
                                        <Checkbox
                                            value='join-meeting-ic'
                                            label='join-meeting'
                                            htmlId='testCheckbox10'
                                            onClick={(event)=> {
                                                samplefnIC(event);
                                            }}
                                        />   
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Theme
                        <div className='form-inline'>   
                        <Select defaultValue="Dark" onSelect={handleChangeTheme}>
                            <SelectOption value="dark" label="Dark" />
                            <SelectOption value="light" label="Light" />
                        </Select>
                        </div>
                    </div> 
                    <div>
                        Draggable
                        <Checkbox
                            value='draggable'
                            label='yes'
                            htmlId='drag'
                            checked={draggable}
                            onChange={() => setDraggable(toggle)}

                        />
                    </div>
                    <div>
                        Styles
                        <div className='form-inline-nowrap'>
                            <Input
                                name='width'
                                label='Width'
                                htmlId='defaultInput3'
                                inputSize='small-5'
                                placeholder='width'
                                onChange={(event) => setWidth(event.target.value)}
                            />
                            <Input
                                name='height'
                                label='Height'
                                htmlId='defaultInpu4'
                                inputSize='small-5'
                                placeholder='height'
                                onChange={(event) => setHeight(event.target.value)}
                            />
                        </div>
                    </div> 
                    </div>):(<div></div>)}
                    <div className="code">
                    <CodeBlock
                        text={code}
                        language={"html"}
                        showLineNumbers={false}
                        theme={tomorrow}
                        wraplines
                    />
                    </div>
                </div>
                
                <div className='flex-child'>
                    {console.log("controls->"+controls)}
                    {accessToken && destinationToken?(
                    <div>
                        {draggable?(
                    <Draggable>
                    <div className="WebexMeeting">
                    <WebexMeetingsWidget
                        style={{width:`${width}`,height:`${height}`,minWidth:"600px",minHeight:"500px"}} // Substitute with any arbitrary size or use `className`
                        accessToken={accessToken}
                        meetingDestination={destinationToken}
                        className={`webex-meeting-widget-demo wxc-theme-${theme}`}
                        layout={layout}
                        controls= {controls}
                    />
                    </div>
                    </Draggable>):(
                        <div className="WebexMeeting">
                        <WebexMeetingsWidget
                            style={{width:`${width}`,height:`${height}`,minWidth:"600px",minHeight:"500px"}} // Substitute with any arbitrary size or use `className`
                            accessToken={accessToken}
                            meetingDestination={destinationToken}
                            className={`webex-meeting-widget-demo wxc-theme-${theme}`}
                            layout={layout}
                            controls= {controls}
                        />
                        </div>
                    )}
                    </div>
                    ):(<div></div>)}
                </div>
            </div>
            </header>
        </div>
    );
}

