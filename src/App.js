import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormControl';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
    const [theme, setTheme] = useState(true);
    const [theme2,setTheme2]= useState('dark');
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
                'theme:"${theme2}",
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

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));

    function handleSubmit() {
        setAccessToken(token)
        setDestinationToken(destination)
    }
    function toggle(value) {
        console.log("draggable?")
        console.log(!value);
        return !value;
    }

    const handleChangeTheme = (event) => {
        const selectedTheme = event.target.checked;
        if(selectedTheme==true)
        {
            setTheme2('dark');
        }
        else
        {
            setTheme2('light');
        }
        setTheme(selectedTheme);
      };

      const handleChangeDraggable = (event) => {
        const selectedDragabble = event.target.checked;
        console.log("selectedDragabble",selectedDragabble)
        setDraggable(selectedDragabble);
      };

      const handleChangeLayout = (event) => {
        const selectedLayout = event.target.value;
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
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField
                            required
                            id="outlined-required"
                            label="Access Token"
                            placeholder='Access Token'
                            value={token}
                            onChange={(event) => setToken(event.target.value)}
                        />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField
                            required
                            id="outlined-required"
                            label="Meeting Destination"
                            placeholder='Meeting Destination'
                            value={destination}
                            onChange={(event) => setDestination(event.target.value)}
                        />
                        </FormControl>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                        {customizationState?(
                        <Button
                            variant="contained"
                            onClick={() => setCustomizationState(false)}
                        >Hide Customization Options</Button>):(
                        <Button
                            variant="contained"
                            onClick={() => setCustomizationState(true)}
                        >Show Customization Options</Button>)}
                        </Box>
                    
                    </div>
                    <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                    {customizationState?(
                    <div>
                        <div className='form-inline'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Layout</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={layout}
                                    label="Layout"
                                    onChange={handleChangeLayout}
                                >
                                    <MenuItem value="Overlay">Overlay</MenuItem>
                                    <MenuItem value="Grid">Grid</MenuItem>
                                    <MenuItem value="Stack">Stack</MenuItem>
                                    <MenuItem value="Prominent">Prominent</MenuItem>
                                    <MenuItem value="Focus">Focus</MenuItem>
                                </Select>
                            </FormControl>
                    </div>
                    <div className='form-inline'>
                        <div>
                            
                        InMeeting Controls
                            <div className='form-inline'>
                                <div>
                                <FormGroup>
                                    <FormControlLabel
                                        label="mute-audio"
                                        control={
                                            <Checkbox
                                                value='mute-audio-im'
                                                checked={muteAudioIM}
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                    <FormControlLabel
                                        label="mute-video"
                                        control={
                                            <Checkbox
                                                value='mute-video-im'
                                                checked={muteVideoIM}
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                </FormGroup>
                                </div>
                                <div>
                                <FormGroup>
                                    <FormControlLabel
                                        label="settings"
                                        control={
                                            <Checkbox
                                                value='settings-im'
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                    <FormControlLabel
                                        label="Share Screen"
                                        control={
                                            <Checkbox
                                                value='share-screen-im'
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                </FormGroup>
                                </div>
                                <div>
                                <FormGroup>
                                    <FormControlLabel
                                        label="Leave Meeting"
                                        control={
                                            <Checkbox
                                                value='leave-meeting-im'
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                    <FormControlLabel
                                        label="Member Roster"
                                        control={
                                            <Checkbox
                                                value='member-roaster-im'
                                                onChange={(event)=> {
                                                    samplefn(event);
                                                }}
                                            />
                                        }
                                    />
                                </FormGroup>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="form-inline">
                        <div>
                        Interstitial Controls
                            <div className="form-inline">
                                <div>
                                    <FormGroup>
                                        <FormControlLabel
                                            label="Mute Audio"
                                            control={
                                                <Checkbox
                                                    value='mute-audio-ic'
                                                    onChange={(event)=> {
                                                        samplefnIC(event);
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Mute Video"
                                            control={
                                                <Checkbox
                                                    value='mute-video-ic'
                                                    onChange={(event)=> {
                                                        samplefnIC(event);
                                                    }}
                                                />
                                            }
                                        />
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup>
                                        <FormControlLabel
                                            label="Settings"
                                            control={
                                                <Checkbox
                                                    value='settings-ic'
                                                    onChange={(event)=> {
                                                        samplefnIC(event);
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Join Meeting"
                                            control={
                                                <Checkbox
                                                    value='join-meeting-ic'
                                                    onChange={(event)=> {
                                                        samplefnIC(event);
                                                    }}
                                                />
                                            }
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div>
                        Theme
                            <div className="form-inline">
                                <div>
                                    <FormGroup>  
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography>Light</Typography>
                                            <MaterialUISwitch sx={{ m: 1 }} defaultChecked checked={theme} onChange={handleChangeTheme}/>
                                            <Typography>Dark</Typography>
                                        </Stack>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div>
                        Draggable
                            <div className="form-inline">
                                <div>
                                    <FormGroup>  
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography>No</Typography>
                                                <Switch
                                                    defaultChecked
                                                    checked={draggable}
                                                    onChange={handleChangeDraggable}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            <Typography>Yes</Typography>
                                        </Stack>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Styles
                        <div className='form-inline-nowrap'>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                        <TextField
                            id="outlined-basic"
                            label="Width"
                            placeholder='Width'
                            value={width}
                            onChange={(event) => setWidth(event.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Height"
                            placeholder='Height'
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}
                        />
                        </Box>
                        </div>
                    </div>
                    </div>):(<div></div>)} </Box>
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
                        className={`webex-meeting-widget-demo wxc-theme-${theme2}`}
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
                            className={`webex-meeting-widget-demo wxc-theme-${theme2}`}
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
