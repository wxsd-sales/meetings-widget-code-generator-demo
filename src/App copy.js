import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@momentum-ui/core/css/momentum-ui.min.css";
import Draggable from "react-draggable";
import { CodeBlock, tomorrow, a11yDark, googlecode } from "react-code-blocks";
import "./App.scss";
import background from "../assets/webex-bg-image.webp";

import { WebexMeetingsWidget } from "@webex/widgets";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@webex/widgets/dist/css/webex-widgets.css";

export default function App() {
  var controls = null;
  const [token, setToken] = useState("");
  const [layout, setLayout] = useState("Grid");
  const [theme, setTheme] = useState(true);
  const [theme2, setTheme2] = useState("dark");
  const [destination, setDestination] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [muteAudioIM, setMuteAudioIM] = useState(true);
  const [muteVideoIM, setMuteVideoIM] = useState(true);
  const [settingsIM, setSettingsIM] = useState(true);
  const [shareScreenIM, setShareScreenIM] = useState(true);
  const [leaveMeetingIM, setLeaveMeetingIM] = useState(true);
  const [memberrosterIM, setMemberrosterIM] = useState(true);
  const [muteAudioIC, setMuteAudioIC] = useState(true);
  const [muteVideoIC, setMuteVideoIC] = useState(true);
  const [settingsIC, setSettingsIC] = useState(true);
  const [joinMeetingIC, setJoinMeetingIC] = useState(true);
  const [arrNew, setArrNew] = useState([
    {
      checkboxName: "mute-audio-im",
      checkboxValue: true,
    },
    {
      checkboxName: "mute-video-im",
      checkboxValue: true,
    },
    {
      checkboxName: "share-screen-im",
      checkboxValue: true,
    },
    {
      checkboxName: "member-roster-im",
      checkboxValue: true,
    },
    {
      checkboxName: "settings-im",
      checkboxValue: true,
    },
    {
      checkboxName: "leave-meeting-im",
      checkboxValue: true,
    },
  ]);
  const [dispArrIM, setDispArrIM] = useState([
    "mute-audio",
    "mute-video",
    "share-screen",
    "member-roster",
    "settings",
    "leave-meeting",
  ]);
  const [arrNew2, setArrNew2] = useState([
    {
      checkboxName: "mute-audio-ic",
      checkboxValue: true,
    },
    {
      checkboxName: "mute-video-ic",
      checkboxValue: true,
    },
    {
      checkboxName: "settings-ic",
      checkboxValue: true,
    },
    {
      checkboxName: "join-meeting-ic",
      checkboxValue: true,
    },
  ]);
  const [dispArrIC, setDispArrIC] = useState([
    "mute-audio",
    "mute-video",
    "settings",
    "join-meeting",
  ]);
  const [customizationState, setCustomizationState] = useState(false);
  const [arrNewIC, setArrNewIC] = useState([]);
  const [arrNewIC2, setArrNewIC2] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [destinationToken, setDestinationToken] = useState("");
  const [draggable, setDraggable] = useState(true);
  const [disableTextbox, setDisableTextbox] = useState(false);
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: orange[900],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  useEffect(() => {
    if (!(sessionStorage.getItem("destination-token") === null)) {
      const token = sessionStorage.getItem("destination-token");
      setDestinationToken(token);
      setDestination(token);
      setDisableTextbox(!disableTextbox);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("destination-token", destinationToken);
  }, [destinationToken]);

  useEffect(() => {
    if (!(sessionStorage.getItem("access-token") === null)) {
      const token = sessionStorage.getItem("access-token");
      setAccessToken(token);
      setToken(token);
      setDisableTextbox(!disableTextbox);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("access-token", accessToken);
  }, [accessToken]);

  const code = `<html>
 <head>
    <title>Webex Widget Demo</title>
    <link href="https://cdn.jsdelivr.net/gh/WXSD-Sales/embeddable-meetings-widget/docs/webex-widgets.css" />
    <script src="https://gitcdn.link/cdn/WXSD-Sales/embeddable-meetings-widget/main/docs/bundle.js"></script>
 </head>
 <body>
    <div id="embeddable-meetings-widget"></div>
    <script>
        webexMeetingsWidget({accessToken: "${accessToken}",
        meetingDestination: "${destinationToken}",
        theme:"${theme2}",
        draggable:"${draggable}",
        width:"${width}",
        height:"${height}",
        layout:"${layout}",
        inMeetingControls:[${dispArrIM.map((val) => "'" + val + "'")}],
        interstitialControls:[${dispArrIC.map((val) => "'" + val + "'")}]});
    </script>
 </body>
 </html>`;

  const myControls = (inMeeting) =>
    inMeeting ? ["leave-meeting"] : ["join-meeting"];

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  function handleSubmit() {
    setAccessToken(token);
    setDestinationToken(destination);
    setDisableTextbox(!disableTextbox);
  }
  function toggle(value) {
    console.log("draggable?");
    console.log(!value);
    return !value;
  }

  const handleChangeTheme = (event) => {
    const selectedTheme = event.target.checked;
    if (selectedTheme == true) {
      setTheme2("dark");
    } else {
      setTheme2("light");
    }
    setTheme(selectedTheme);
  };

  const handleChangeDraggable = (event) => {
    const selectedDragabble = event.target.checked;
    console.log("selectedDragabble", selectedDragabble);
    setDraggable(selectedDragabble);
  };

  const handleChangeLayout = (event) => {
    const selectedLayout = event.target.value;
    setLayout(selectedLayout);
  };

  function arraySetter(
    checkboxNamee,
    checkboxVal,
    setFn,
    setDisp,
    arr,
    setArr
  ) {
    let meetingControls = arr;
    let tempArr = [];
    meetingControls = meetingControls.map((obj) =>
      obj.checkboxName == checkboxNamee
        ? { ...obj, checkboxValue: !checkboxVal }
        : obj
    );

    for (let i = 0; i < meetingControls.length; i++) {
      if (meetingControls[i].checkboxValue == true) {
        let boxName = meetingControls[i].checkboxName;
        tempArr.push(boxName.substring(0, boxName.length - 3));
      }
    }
    setArr(meetingControls);
    setFn(!checkboxVal);
    setDisp(tempArr);
  }

  function samplefn(event) {
    switch (event.target.value) {
      case "mute-audio-im":
        arraySetter(
          event.target.value,
          muteAudioIM,
          setMuteAudioIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;

      case "mute-video-im":
        arraySetter(
          event.target.value,
          muteVideoIM,
          setMuteVideoIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;

      case "settings-im":
        arraySetter(
          event.target.value,
          settingsIM,
          setSettingsIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;

      case "share-screen-im":
        arraySetter(
          event.target.value,
          shareScreenIM,
          setShareScreenIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;

      case "leave-meeting-im":
        arraySetter(
          event.target.value,
          leaveMeetingIM,
          setLeaveMeetingIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;

      case "member-roster-im":
        arraySetter(
          event.target.value,
          memberrosterIM,
          setMemberrosterIM,
          setDispArrIM,
          arrNew,
          setArrNew
        );
        break;
      case "mute-audio-ic":
        arraySetter(
          event.target.value,
          muteAudioIC,
          setMuteAudioIC,
          setDispArrIC,
          arrNew2,
          setArrNew2
        );
        break;

      case "mute-video-ic":
        arraySetter(
          event.target.value,
          muteVideoIC,
          setMuteVideoIC,
          setDispArrIC,
          arrNew2,
          setArrNew2
        );
        break;

      case "settings-ic":
        arraySetter(
          event.target.value,
          settingsIC,
          setSettingsIC,
          setDispArrIC,
          arrNew2,
          setArrNew2
        );
        break;

      case "join-meeting-ic":
        arraySetter(
          event.target.value,
          joinMeetingIC,
          setJoinMeetingIC,
          setDispArrIC,
          arrNew2,
          setArrNew2
        );
        break;
    }
  }
  console.log("IMLength",dispArrIM.length);
  console.log("ICLength",dispArrIC.length);
  if (dispArrIM?.length != 0 && dispArrIC?.length != 0) {
    console.log("1");
    console.log(dispArrIM);
    console.log(dispArrIC);
    controls = (inMeeting) => (inMeeting ? dispArrIM : dispArrIC);
  } else if (dispArrIM?.length == 0 && dispArrIC?.length != 0) {
    console.log("2");
    controls = (inMeeting) =>
      inMeeting
        ? [
            "mute-audio",
            "mute-video",
            "share-screen",
            "member-roster",
            "settings",
            "leave-meeting",
          ]
        : dispArrIC;
  } else if (dispArrIM?.length != 0 && dispArrIC?.length == 0) {
    console.log("3");
    console.log(dispArrIM);
    controls = (inMeeting) => 
      inMeeting
        ? dispArrIM
        : ["mute-audio", "mute-video", "settings", "join-meeting"];
  } else {
    console.log("4");
    controls = (inMeeting) =>
      inMeeting
        ? [
            "mute-audio",
            "mute-video",
            "share-screen",
            "member-roster",
            "settings",
            "leave-meeting",
          ]
        : ["mute-audio", "mute-video", "settings", "join-meeting"];
  }

  function refreshPage() {
    sessionStorage.clear();
    window.location.reload(false);
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <div className="outerDiv">
          <div className="flex-child">
            <div>
              {/* {console.log( "IM -> " + arrNew)} */}
              {/* {console.log(arrNew)}
 {console.log(arrNew2)} */}
              {/* {console.log( "IC -> " + arrNew2)} */}
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  required
                  id="outlined-required"
                  label="Access Token"
                  placeholder="Access Token"
                  value={token}
                  onChange={(event) => setToken(event.target.value)}
                  disabled={disableTextbox}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  required
                  id="outlined-required"
                  label="Meeting Destination"
                  placeholder="Meeting Destination"
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  disabled={disableTextbox}
                />
              </FormControl>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={disableTextbox}
                >
                  Submit
                </Button>
                {customizationState ? (
                  <Button
                    variant="contained"
                    onClick={() => setCustomizationState(false)}
                  >
                    Hide Customization Options
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => setCustomizationState(true)}
                  >
                    Show Customization Options
                  </Button>
                )}
                {/* <Button variant="contained" onClick ={refreshPage}
 >Reset
 </Button> */}
                <ThemeProvider theme={buttonTheme}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={refreshPage}
                  >
                    Reset
                  </Button>
                </ThemeProvider>
              </Box>
            </div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              {customizationState ? (
                <div>
                  <div className="form-inline">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Layout
                      </InputLabel>
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
                  <div className="form-inline">
                    <div>
                      When meeting is in-meeting:
                      <div className="form-inline">
                        <div>
                          <FormGroup>
                            <FormControlLabel
                              label="Mute Audio"
                              control={
                                <Checkbox
                                  value="mute-audio-im"
                                  checked={muteAudioIM}
                                  onChange={(event) => {
                                    samplefn(event);
                                  }}
                                />
                              }
                            />
                            <FormControlLabel
                              label="Mute Video"
                              control={
                                <Checkbox
                                  value="mute-video-im"
                                  checked={muteVideoIM}
                                  onChange={(event) => {
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
                              label="Settings"
                              control={
                                <Checkbox
                                  value="settings-im"
                                  checked={settingsIM}
                                  onChange={(event) => {
                                    samplefn(event);
                                  }}
                                />
                              }
                            />
                            <FormControlLabel
                              label="Share Screen"
                              control={
                                <Checkbox
                                  value="share-screen-im"
                                  checked={shareScreenIM}
                                  onChange={(event) => {
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
                                  value="leave-meeting-im"
                                  checked={leaveMeetingIM}
                                  onChange={(event) => {
                                    samplefn(event);
                                  }}
                                />
                              }
                            />
                            <FormControlLabel
                              label="Member Roster"
                              checked={memberrosterIM}
                              control={
                                <Checkbox
                                  value="member-roster-im"
                                  onChange={(event) => {
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
                      When meeting is not joined:
                      <div className="form-inline">
                        <div>
                          <FormGroup>
                            <FormControlLabel
                              label="Mute Audio"
                              checked={muteAudioIC}
                              control={
                                <Checkbox
                                  value="mute-audio-ic"
                                  onChange={(event) => {
                                    samplefn(event);
                                  }}
                                />
                              }
                            />
                            <FormControlLabel
                              label="Mute Video"
                              checked={muteVideoIC}
                              control={
                                <Checkbox
                                  value="mute-video-ic"
                                  onChange={(event) => {
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
                              label="Settings"
                              checked={settingsIC}
                              control={
                                <Checkbox
                                  value="settings-ic"
                                  onChange={(event) => {
                                    samplefn(event);
                                  }}
                                />
                              }
                            />
                            <FormControlLabel
                              label="Join Meeting"
                              checked={joinMeetingIC}
                              control={
                                <Checkbox
                                  value="join-meeting-ic"
                                  onChange={(event) => {
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
                      Theme
                      <div className="form-inline">
                        <div>
                          <FormGroup>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography>Light</Typography>
                              <MaterialUISwitch
                                sx={{ m: 1 }}
                                defaultChecked
                                checked={theme}
                                onChange={handleChangeTheme}
                              />
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
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography>No</Typography>
                              <Switch
                                disabled={disableTextbox}
                                defaultChecked
                                checked={draggable}
                                onChange={handleChangeDraggable}
                                inputProps={{ "aria-label": "controlled" }}
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
                    <div className="form-inline-nowrap">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { m: 1, width: "30ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-basic"
                          label="Width"
                          placeholder="Width"
                          value={width}
                          onChange={(event) => setWidth(event.target.value)}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Height"
                          placeholder="Height"
                          value={height}
                          onChange={(event) => setHeight(event.target.value)}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}{" "}
            </Box>
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

          <div className="flex-child">
            {accessToken && destinationToken ? (
              <div>
                {draggable ? (
                  <Draggable>
                    <div className="WebexMeeting">
                      <WebexMeetingsWidget
                        style={{
                          width: `${width}`,
                          height: `${height}`,
                          minWidth: "600px",
                          minHeight: "500px",
                          maxWidth: "unset",
                        }} // Substitute with any arbitrary size or use `className`
                        accessToken={accessToken}
                        meetingDestination={destinationToken}
                        className={`webex-meeting-widget-demo wxc-theme-${theme2}`}
                        layout={layout}
                        controls={controls}
                      />
                    </div>
                  </Draggable>
                ) : (
                  <div className="WebexMeeting">
                    {console.log("tag1")}
                    <WebexMeetingsWidget
                      style={{
                        width: `${width}`,
                        height: `${height}`,
                        minWidth: "600px",
                        minHeight: "500px",
                        maxWidth: "unset",
                      }} // Substitute with any arbitrary size or use `className`
                      accessToken={accessToken}
                      meetingDestination={destinationToken}
                      className={`webex-meeting-widget-demo wxc-theme-${theme2}`}
                      layout={layout}
                      controls={controls}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
