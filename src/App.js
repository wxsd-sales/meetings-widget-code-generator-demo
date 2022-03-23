import React, {useState} from 'react';
import {Select, SelectOption, Input, Checkbox, CheckboxGroup} from '@momentum-ui/react';
import '@momentum-ui/core/css/momentum-ui.min.css';
import './App.css';

export default function App() {
    const [token, setToken] = useState('');
    const [destination, setDestination] = useState('');
  

  return (
      <div>
          <header className='App-header'>
          {/* <h1 className='header'>Meetings Widget Demo</h1> */}
          <div className='outerDiv'>
                <div className='flex-child'>
                    <div >
                    
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
                    
                    </div>
                    <div className='form-inline'>
                        <div>
                            
                        InMeeting Controls
                            <div className='form-inline'>
                                <div>
                                    <CheckboxGroup name='CheckboxGroup1'>
                                        <Checkbox
                                            value='mute-audioInMeeting'
                                            label='mute-audio'
                                            htmlId='testCheckbox1'
                                            onChange={(event) => console.log(event.target.value)}
                                        />
                                        <Checkbox
                                            value='mute-videoInMeeting'
                                            label='mute-video'
                                            htmlId='testCheckbox2'
                                            onChange={() => { }}
                                        />   
                                    </CheckboxGroup>
                                </div>

                                <div>
                                <CheckboxGroup name='CheckboxGroup2'>
                                        <Checkbox
                                            value='settingsInMeeting'
                                            label='settings'
                                            htmlId='testCheckbox3'
                                            onChange={() => { }}
                                        />
                                        <Checkbox
                                            value='share-screenInMeeting'
                                            label='share-screen'
                                            htmlId='testCheckbox4'
                                            onChange={() => { }}
                                        />  
                                    </CheckboxGroup>
                                </div>

                                <div>
                                    <CheckboxGroup name='CheckboxGroup3'>  
                                        <Checkbox
                                            value='leave-meetingInMeeting'
                                            label='leave-meeting'
                                            htmlId='testCheckbox5'
                                            onChange={() => { }}
                                        />
                                        <Checkbox
                                            value='member-roasterInMeeting'
                                            label='member-roaster'
                                            htmlId='testCheckbox6'
                                            onChange={() => { }}
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
                                        value='mute-audioInterstitial'
                                        label='mute-audio'
                                        htmlId='testCheckbox7'
                                        onChange={() => { }}
                                    />
                                    <Checkbox
                                        value='mute-videoInterstitial'
                                        label='mute-video'
                                        htmlId='testCheckbox8'
                                        onChange={() => { }}
                                    />
                                </CheckboxGroup>

                                </div>
                                <div>
                                    <CheckboxGroup name='CheckboxGroup5'>
                                        <Checkbox
                                            value='settingsInterstitial'
                                            label='settings'
                                            htmlId='testCheckbox9'
                                            onChange={() => { }}
                                        />
                                        <Checkbox
                                            value='join-meetingInterstitial'
                                            label='join-meeting'
                                            htmlId='testCheckbox10'
                                            onChange={() => { }}
                                        />   
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Theme
                        <div className='form-inline'>   
                            <Select defaultValue='Select Item Here' >
                                <SelectOption value='light' label='light' />
                                <SelectOption value='dark' label='dark' />
                            </Select>
                        </div>
                    </div> 
                    <div>
                        Layout
                        <div className='form-inline-nowrap'>
                            <Input
                                name='width'
                                label='Width'
                                htmlId='defaultInput3'
                                inputSize='small-5'
                                placeholder='width'
                            />
                            <Input
                                name='height'
                                label='Height'
                                htmlId='defaultInpu4'
                                inputSize='small-5'
                                placeholder='height'
                            />
                        </div>
                    </div>    
                </div>
                <div className='flex-child'>
                    right div
                    
                    
              </div>
          </div>
          </header>
      </div>
  );
}

