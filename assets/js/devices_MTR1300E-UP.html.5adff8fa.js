"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59160],{28463:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>n,data:()=>d});var i=t(6254);const a={},n=(0,t(89596).A)(a,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"yokis-mtr1300e-up",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#yokis-mtr1300e-up"},[(0,i.Lk)("span",null,"YOKIS MTR1300E-UP")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"MTR1300E-UP")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=YOKIS"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("YOKIS")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Remote power switch with timer 1300W")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), identify, PrevState, onTimer, ePreOnDelay, PreOnDelay, ePreOffDelay, PreOffDelay, PulseDuration, TimeType, LongOnDuration, OperatingMode, eStopAnnounce, StopAnnounceTime, eDeaf, DeafBlinkAmount, DeafBlinkTime, eBlink, BlinkAmount, BlinkOnTime, BlinkOffTime, StateAfterBlink, eNcCommand, moveToPositionCommand, pulseCommand, blinkCommand, deafBlinkCommand, longOnCommand, uc_ResetAction, RelaunchBleAdvert, eShortPress, eLongPress, LongPressDuration, TimeBetweenPress, eR12MLongPress, eLocalConfigLock, powerFailureMode, linkquality")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MTR1300E-UP.png",alt:"YOKIS MTR1300E-UP"})])],-1))])]),o[9]||(o[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li><a href="https://csa-iot.org/csa_product/mtr1300eb-up/" target="_blank" rel="noopener noreferrer">CSA product page</a></li><li><code>On with timed off</code> is not supported by this device. Use <code>OnTimer</code> instead.</li><li><code>powerOnBehavior</code> from the OnOff cluster is not supported but <code>powerFailureMode</code> has the same purpose.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="prevstate-binary" tabindex="-1"><a class="header-anchor" href="#prevstate-binary"><span>PrevState (binary)</span></a></h3><p>Indicate the previous state before action. Value can be found in the published state on the <code>PrevState</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;PrevState&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>ON</code> prevState is ON, if <code>OFF</code> OFF.</p><h3 id="ontimer-numeric" tabindex="-1"><a class="header-anchor" href="#ontimer-numeric"><span>OnTimer (numeric)</span></a></h3><p>Define the ON embedded timer duration in seconds. A <code>0</code> value will deactivate the timer. Value can be found in the published state on the <code>onTimer</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;onTimer&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;onTimer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="epreondelay-binary" tabindex="-1"><a class="header-anchor" href="#epreondelay-binary"><span>EPreOnDelay (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) PreOn delay. Value can be found in the published state on the <code>ePreOnDelay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ePreOnDelay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ePreOnDelay&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> ePreOnDelay is ON, if <code>OFF</code> OFF.</p><h3 id="preondelay-numeric" tabindex="-1"><a class="header-anchor" href="#preondelay-numeric"><span>PreOnDelay (numeric)</span></a></h3><p>Define the PreOn embedded delay in seconds. Value can be found in the published state on the <code>PreOnDelay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;PreOnDelay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;PreOnDelay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="epreoffdelay-binary" tabindex="-1"><a class="header-anchor" href="#epreoffdelay-binary"><span>EPreOffDelay (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) PreOff delay. Value can be found in the published state on the <code>ePreOffDelay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ePreOffDelay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ePreOffDelay&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> ePreOffDelay is ON, if <code>OFF</code> OFF.</p><h3 id="preoffdelay-numeric" tabindex="-1"><a class="header-anchor" href="#preoffdelay-numeric"><span>PreOffDelay (numeric)</span></a></h3><p>Define the PreOff embedded delay in seconds. Value can be found in the published state on the <code>PreOffDelay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;PreOffDelay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;PreOffDelay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="pulseduration-numeric" tabindex="-1"><a class="header-anchor" href="#pulseduration-numeric"><span>PulseDuration (numeric)</span></a></h3><p>Set the value of ON pulse length. Value can be found in the published state on the <code>PulseDuration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;PulseDuration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;PulseDuration&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>65534</code>. The unit of this value is <code>ms</code>.</p><h3 id="timetype-enum" tabindex="-1"><a class="header-anchor" href="#timetype-enum"><span>TimeType (enum)</span></a></h3><p>Indicates the current Type of time selected that will be used during push button configuration: - 0x00 -&gt; Seconds - 0x01 -&gt; Minutes. Value can be found in the published state on the <code>TimeType</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;TimeType&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;TimeType&quot;: NEW_VALUE}</code>. The possible values are: <code>Seconds</code>, <code>Minutes</code>.</p><h3 id="longonduration-numeric" tabindex="-1"><a class="header-anchor" href="#longonduration-numeric"><span>LongOnDuration (numeric)</span></a></h3><p>Set the value of the LONG ON embedded timer in seconds. Value can be found in the published state on the <code>LongOnDuration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;LongOnDuration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;LongOnDuration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>. The unit of this value is <code>s</code>.</p><h3 id="operatingmode-enum" tabindex="-1"><a class="header-anchor" href="#operatingmode-enum"><span>OperatingMode (enum)</span></a></h3><p>Indicates the operating mode: - 0x00 -&gt; Timer - 0x01 -&gt; Staircase - 0x02 -&gt; Pulse. Value can be found in the published state on the <code>OperatingMode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;OperatingMode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;OperatingMode&quot;: NEW_VALUE}</code>. The possible values are: <code>Timer</code>, <code>Staircase</code>, <code>Pulse</code>.</p><h3 id="estopannounce-binary" tabindex="-1"><a class="header-anchor" href="#estopannounce-binary"><span>EStopAnnounce (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) the announcement before turning OFF. Value can be found in the published state on the <code>eStopAnnounce</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eStopAnnounce&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eStopAnnounce&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eStopAnnounce is ON, if <code>OFF</code> OFF.</p><h3 id="stopannouncetime-numeric" tabindex="-1"><a class="header-anchor" href="#stopannouncetime-numeric"><span>StopAnnounceTime (numeric)</span></a></h3><p>Time before goes off after the stop announce blinking. (In seconds). Value can be found in the published state on the <code>StopAnnounceTime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;StopAnnounceTime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;StopAnnounceTime&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>. The unit of this value is <code>s</code>.</p><h3 id="edeaf-binary" tabindex="-1"><a class="header-anchor" href="#edeaf-binary"><span>EDeaf (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) Deaf Actions. Value can be found in the published state on the <code>eDeaf</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eDeaf&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eDeaf&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eDeaf is ON, if <code>OFF</code> OFF.</p><h3 id="deafblinkamount-numeric" tabindex="-1"><a class="header-anchor" href="#deafblinkamount-numeric"><span>DeafBlinkAmount (numeric)</span></a></h3><p>Define number of blink to do when receiving the DEAF action. One blink is considered as one ON step followed by one OFF step. Value can be found in the published state on the <code>DeafBlinkAmount</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;DeafBlinkAmount&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;DeafBlinkAmount&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>.</p><h3 id="deafblinktime-numeric" tabindex="-1"><a class="header-anchor" href="#deafblinktime-numeric"><span>DeafBlinkTime (numeric)</span></a></h3><p>Define duration of a blink ON (In millisecond). Value can be found in the published state on the <code>DeafBlinkTime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;DeafBlinkTime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;DeafBlinkTime&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>20000</code>.</p><h3 id="eblink-binary" tabindex="-1"><a class="header-anchor" href="#eblink-binary"><span>EBlink (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) Blink Actions. Value can be found in the published state on the <code>eBlink</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eBlink&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eBlink&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eBlink is ON, if <code>OFF</code> OFF.</p><h3 id="blinkamount-numeric" tabindex="-1"><a class="header-anchor" href="#blinkamount-numeric"><span>BlinkAmount (numeric)</span></a></h3><p>Number of blinks done when receiving the corresponding order. One blink is considered as one ON step followed by one OFF step. Value can be found in the published state on the <code>BlinkAmount</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;BlinkAmount&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;BlinkAmount&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>.</p><h3 id="blinkontime-numeric" tabindex="-1"><a class="header-anchor" href="#blinkontime-numeric"><span>BlinkOnTime (numeric)</span></a></h3><p>Duration for the ON time on a blink period (In millisecond). Value can be found in the published state on the <code>BlinkOnTime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;BlinkOnTime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;BlinkOnTime&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>.</p><h3 id="blinkofftime-numeric" tabindex="-1"><a class="header-anchor" href="#blinkofftime-numeric"><span>BlinkOffTime (numeric)</span></a></h3><p>Duration for the OFF time on a blink period (In millisecond). Value can be found in the published state on the <code>BlinkOffTime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;BlinkOffTime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;BlinkOffTime&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>.</p><h3 id="stateafterblink-enum" tabindex="-1"><a class="header-anchor" href="#stateafterblink-enum"><span>StateAfterBlink (enum)</span></a></h3><p>Indicate which state must be apply after a blink sequence: - 0x00 -&gt; State before blinking - 0x01 -&gt; OFF - 0x02 -&gt; ON - 0x03 -&gt; Infinite blinking. Value can be found in the published state on the <code>StateAfterBlink</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;StateAfterBlink&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;StateAfterBlink&quot;: NEW_VALUE}</code>. The possible values are: <code>Previous</code>, <code>OFF</code>, <code>ON</code>, <code>INFINITE</code>.</p><h3 id="enccommand-binary" tabindex="-1"><a class="header-anchor" href="#enccommand-binary"><span>ENcCommand (binary)</span></a></h3><p>Define the output relay as Normaly close. Value can be found in the published state on the <code>eNcCommand</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eNcCommand&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eNcCommand&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eNcCommand is ON, if <code>OFF</code> OFF.</p><h3 id="movetopositioncommand-composite" tabindex="-1"><a class="header-anchor" href="#movetopositioncommand-composite"><span>MoveToPositionCommand (composite)</span></a></h3><p>Move to position specified in uc_BrightnessEnd parameter.If TOR mode is set (no dimming) or MTR : if uc_BrightnessEnd under 50% will set to OFF else will be set to ON. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;moveToPositionProp&quot;: {&quot;uc_BrightnessStart&quot;: VALUE, &quot;uc_BrightnessEnd&quot;: VALUE, &quot;ul_PreTimerValue&quot;: VALUE, &quot;b_PreTimerEnable&quot;: VALUE, &quot;ul_TimerValue&quot;: VALUE, &quot;b_TimerEnable&quot;: VALUE, &quot;ul_TransitionTime&quot;: VALUE}}</code></p><ul><li><code>uc_BrightnessStart</code> (numeric)</li><li><code>uc_BrightnessEnd</code> (numeric)</li><li><code>ul_PreTimerValue</code> (numeric): If defined will force the pretimer value (only for this order) if not the device will use its own value. unit is s</li><li><code>b_PreTimerEnable</code> (binary): If defined will force the pretimer use (only for this order) if not the device will use its own value. allowed values: <code>true</code> or <code>false</code></li><li><code>ul_TimerValue</code> (numeric): If defined will force the OnTimer value (only for this order) if not the device will use its own value. unit is s</li><li><code>b_TimerEnable</code> (binary): If defined will force the OnTimer use (only for this order) if not the device will use its own value. allowed values: <code>true</code> or <code>false</code></li><li><code>ul_TransitionTime</code> (numeric)</li></ul><h3 id="pulsecommand-composite" tabindex="-1"><a class="header-anchor" href="#pulsecommand-composite"><span>PulseCommand (composite)</span></a></h3><p>This command allows the relay to be controlled with an impulse. The pulse time is defined by PulseLength. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pulseProp&quot;: {&quot;pulseLength&quot;: VALUE}}</code></p><ul><li><code>pulseLength</code> (numeric): Pulse length max value is 65535, unit is ms</li></ul><h3 id="blinkcommand-composite" tabindex="-1"><a class="header-anchor" href="#blinkcommand-composite"><span>BlinkCommand (composite)</span></a></h3><p>With this command, the module is asked to perform a blinking sequence.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;blinkProp&quot;: {&quot;uc_BlinkAmount&quot;: VALUE, &quot;ul_BlinkOnPeriod&quot;: VALUE, &quot;ul_BlinkOffPeriod&quot;: VALUE, &quot;uc_StateAfterSequence&quot;: VALUE, &quot;b_DoPeriodicCycle&quot;: VALUE}}</code></p><ul><li><code>uc_BlinkAmount</code> (numeric): If defined will force the number of blink to be done (only for this order).if not the device will use its own value.</li><li><code>ul_BlinkOnPeriod</code> (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value.</li><li><code>ul_BlinkOffPeriod</code> (numeric): If defined will force the blink’s “off time” (only for this order) if not the device will use its own value.</li><li><code>uc_StateAfterSequence</code> (enum): If defined will force the state after the sequence (only for this order).if not the device will use its own value- allowed values: <code>Previous</code>, <code>OFF</code>, <code>ON</code>, <code>INFINITE</code></li><li><code>b_DoPeriodicCycle</code> (binary): If set to true the blinking will be “infinite” allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="deafblinkcommand-composite" tabindex="-1"><a class="header-anchor" href="#deafblinkcommand-composite"><span>DeafBlinkCommand (composite)</span></a></h3><p>Start a deaf sequene on a device only if the attribute “eDeaf” is set to Enable. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deafBlinkProp&quot;: {&quot;uc_BlinkAmount&quot;: VALUE, &quot;ul_BlinkOnTime&quot;: VALUE, &quot;uc_SequenceAmount&quot;: VALUE, &quot;tuc_BlinkAmount&quot;: VALUE}}</code></p><ul><li><code>uc_BlinkAmount</code> (numeric): If defined will force the number of blink to be done during one sequence (only for this order).if not the device will use its own value</li><li><code>ul_BlinkOnTime</code> (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value</li><li><code>uc_SequenceAmount</code> (numeric): If defined will set the number of sequence to be done. Each sequence is spaced by 1 second. (Max 6) max value is 6</li><li><code>tuc_BlinkAmount</code> (list): Array with the number of blink to be done for each sequence. Will override “uc_BlinkAmount“</li></ul><h3 id="longoncommand-enum" tabindex="-1"><a class="header-anchor" href="#longoncommand-enum"><span>LongOnCommand (enum)</span></a></h3><p>Ititiate long duration on. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;longOnCommand&quot;: NEW_VALUE}</code>. The possible values are: <code>longOnAction</code>.</p><h3 id="uc-resetaction-enum" tabindex="-1"><a class="header-anchor" href="#uc-resetaction-enum"><span>Uc ResetAction (enum)</span></a></h3><p>Ititiate long duration on. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;uc_ResetAction&quot;: NEW_VALUE}</code>. The possible values are: <code>Factory reset</code>, <code>Configuration Reset</code>, <code>Network Reset</code>.</p><h3 id="relaunchbleadvert-enum" tabindex="-1"><a class="header-anchor" href="#relaunchbleadvert-enum"><span>RelaunchBleAdvert (enum)</span></a></h3><p>Relaunch BLE advertising for 15 minutes. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;RelaunchBleAdvert&quot;: NEW_VALUE}</code>. The possible values are: <code>RelaunchBle</code>.</p><h3 id="eshortpress-binary" tabindex="-1"><a class="header-anchor" href="#eshortpress-binary"><span>EShortPress (binary)</span></a></h3><p>Use to enable short press action. Value can be found in the published state on the <code>eShortPress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eShortPress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eShortPress&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eShortPress is ON, if <code>OFF</code> OFF.</p><h3 id="elongpress-binary" tabindex="-1"><a class="header-anchor" href="#elongpress-binary"><span>ELongPress (binary)</span></a></h3><p>Use to enable long press action. Value can be found in the published state on the <code>eLongPress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eLongPress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eLongPress&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eLongPress is ON, if <code>OFF</code> OFF.</p><h3 id="longpressduration-numeric" tabindex="-1"><a class="header-anchor" href="#longpressduration-numeric"><span>LongPressDuration (numeric)</span></a></h3><p>Define long Press duration in milliseconds. Value can be found in the published state on the <code>LongPressDuration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;LongPressDuration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;LongPressDuration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ms</code>.</p><h3 id="timebetweenpress-numeric" tabindex="-1"><a class="header-anchor" href="#timebetweenpress-numeric"><span>TimeBetweenPress (numeric)</span></a></h3><p>Define the maximum time between 2 press to keep in a sequence (In milliseconds). Value can be found in the published state on the <code>TimeBetweenPress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;TimeBetweenPress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;TimeBetweenPress&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>600</code>. The unit of this value is <code>ms</code>.</p><h3 id="er12mlongpress-binary" tabindex="-1"><a class="header-anchor" href="#er12mlongpress-binary"><span>ER12MLongPress (binary)</span></a></h3><p>Enable R12M Long Press action. Value can be found in the published state on the <code>eR12MLongPress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eR12MLongPress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eR12MLongPress&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eR12MLongPress is ON, if <code>OFF</code> OFF.</p><h3 id="elocalconfiglock-binary" tabindex="-1"><a class="header-anchor" href="#elocalconfiglock-binary"><span>ELocalConfigLock (binary)</span></a></h3><p>Disable local configuration. Value can be found in the published state on the <code>eLocalConfigLock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;eLocalConfigLock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eLocalConfigLock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eLocalConfigLock is ON, if <code>OFF</code> OFF.</p><h3 id="powerfailuremode-enum" tabindex="-1"><a class="header-anchor" href="#powerfailuremode-enum"><span>PowerFailureMode (enum)</span></a></h3><p>Define the device behavior after power failure. Value can be found in the published state on the <code>powerFailureMode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;powerFailureMode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;powerFailureMode&quot;: NEW_VALUE}</code>. The possible values are: <code>last_state</code>, <code>off</code>, <code>on</code>, <code>blink</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',84))])}]]),d=JSON.parse('{"path":"/devices/MTR1300E-UP.html","title":"YOKIS MTR1300E-UP control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"YOKIS MTR1300E-UP control via MQTT","description":"Integrate your YOKIS MTR1300E-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-12-29T16:26:41.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"PrevState (binary)","slug":"prevstate-binary","link":"#prevstate-binary","children":[]},{"level":3,"title":"OnTimer (numeric)","slug":"ontimer-numeric","link":"#ontimer-numeric","children":[]},{"level":3,"title":"EPreOnDelay (binary)","slug":"epreondelay-binary","link":"#epreondelay-binary","children":[]},{"level":3,"title":"PreOnDelay (numeric)","slug":"preondelay-numeric","link":"#preondelay-numeric","children":[]},{"level":3,"title":"EPreOffDelay (binary)","slug":"epreoffdelay-binary","link":"#epreoffdelay-binary","children":[]},{"level":3,"title":"PreOffDelay (numeric)","slug":"preoffdelay-numeric","link":"#preoffdelay-numeric","children":[]},{"level":3,"title":"PulseDuration (numeric)","slug":"pulseduration-numeric","link":"#pulseduration-numeric","children":[]},{"level":3,"title":"TimeType (enum)","slug":"timetype-enum","link":"#timetype-enum","children":[]},{"level":3,"title":"LongOnDuration (numeric)","slug":"longonduration-numeric","link":"#longonduration-numeric","children":[]},{"level":3,"title":"OperatingMode (enum)","slug":"operatingmode-enum","link":"#operatingmode-enum","children":[]},{"level":3,"title":"EStopAnnounce (binary)","slug":"estopannounce-binary","link":"#estopannounce-binary","children":[]},{"level":3,"title":"StopAnnounceTime (numeric)","slug":"stopannouncetime-numeric","link":"#stopannouncetime-numeric","children":[]},{"level":3,"title":"EDeaf (binary)","slug":"edeaf-binary","link":"#edeaf-binary","children":[]},{"level":3,"title":"DeafBlinkAmount (numeric)","slug":"deafblinkamount-numeric","link":"#deafblinkamount-numeric","children":[]},{"level":3,"title":"DeafBlinkTime (numeric)","slug":"deafblinktime-numeric","link":"#deafblinktime-numeric","children":[]},{"level":3,"title":"EBlink (binary)","slug":"eblink-binary","link":"#eblink-binary","children":[]},{"level":3,"title":"BlinkAmount (numeric)","slug":"blinkamount-numeric","link":"#blinkamount-numeric","children":[]},{"level":3,"title":"BlinkOnTime (numeric)","slug":"blinkontime-numeric","link":"#blinkontime-numeric","children":[]},{"level":3,"title":"BlinkOffTime (numeric)","slug":"blinkofftime-numeric","link":"#blinkofftime-numeric","children":[]},{"level":3,"title":"StateAfterBlink (enum)","slug":"stateafterblink-enum","link":"#stateafterblink-enum","children":[]},{"level":3,"title":"ENcCommand (binary)","slug":"enccommand-binary","link":"#enccommand-binary","children":[]},{"level":3,"title":"MoveToPositionCommand (composite)","slug":"movetopositioncommand-composite","link":"#movetopositioncommand-composite","children":[]},{"level":3,"title":"PulseCommand (composite)","slug":"pulsecommand-composite","link":"#pulsecommand-composite","children":[]},{"level":3,"title":"BlinkCommand (composite)","slug":"blinkcommand-composite","link":"#blinkcommand-composite","children":[]},{"level":3,"title":"DeafBlinkCommand (composite)","slug":"deafblinkcommand-composite","link":"#deafblinkcommand-composite","children":[]},{"level":3,"title":"LongOnCommand (enum)","slug":"longoncommand-enum","link":"#longoncommand-enum","children":[]},{"level":3,"title":"Uc ResetAction (enum)","slug":"uc-resetaction-enum","link":"#uc-resetaction-enum","children":[]},{"level":3,"title":"RelaunchBleAdvert (enum)","slug":"relaunchbleadvert-enum","link":"#relaunchbleadvert-enum","children":[]},{"level":3,"title":"EShortPress (binary)","slug":"eshortpress-binary","link":"#eshortpress-binary","children":[]},{"level":3,"title":"ELongPress (binary)","slug":"elongpress-binary","link":"#elongpress-binary","children":[]},{"level":3,"title":"LongPressDuration (numeric)","slug":"longpressduration-numeric","link":"#longpressduration-numeric","children":[]},{"level":3,"title":"TimeBetweenPress (numeric)","slug":"timebetweenpress-numeric","link":"#timebetweenpress-numeric","children":[]},{"level":3,"title":"ER12MLongPress (binary)","slug":"er12mlongpress-binary","link":"#er12mlongpress-binary","children":[]},{"level":3,"title":"ELocalConfigLock (binary)","slug":"elocalconfiglock-binary","link":"#elocalconfiglock-binary","children":[]},{"level":3,"title":"PowerFailureMode (enum)","slug":"powerfailuremode-enum","link":"#powerfailuremode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735588649000},"filePathRelative":"devices/MTR1300E-UP.md"}')}}]);