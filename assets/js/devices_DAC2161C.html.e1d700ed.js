"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90761],{88330:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>l,data:()=>i});var a=o(6254);const r={},l=(0,o(89596).A)(r,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"matsee-plus-dac2161c",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#matsee-plus-dac2161c"},[(0,a.Lk)("span",null,"MatSee Plus DAC2161C")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"DAC2161C")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=MatSee%20Plus"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("MatSee Plus")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart Zigbee energy meter 80A din rail")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), energy, power, voltage, current, fault, threshold_1, threshold_1_protection, threshold_1_value, threshold_2, threshold_2_protection, threshold_2_value, clear_fault, meter_id, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DAC2161C.png",alt:"MatSee Plus DAC2161C"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum"><span>Fault (enum)</span></a></h3><p>Fault status of the device (clear = nothing). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>clear</code>, <code>over_current_threshold</code>, <code>over_power_threshold</code>, <code>over_voltage threshold</code>, <code>wrong_frequency_threshold</code>.</p><h3 id="threshold-1-enum" tabindex="-1"><a class="header-anchor" href="#threshold-1-enum"><span>Threshold 1 (enum)</span></a></h3><p>State of threshold_1. Value can be found in the published state on the <code>threshold_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-1-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-1-protection-binary"><span>Threshold 1 protection (binary)</span></a></h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_1_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold 1 protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-1-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-1-value-numeric"><span>Threshold 1 value (numeric)</span></a></h3><p>Can be in Volt or Ampere depending on threshold setting. Setup the value on the device. Value can be found in the published state on the <code>threshold_1_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="threshold-2-enum" tabindex="-1"><a class="header-anchor" href="#threshold-2-enum"><span>Threshold 2 (enum)</span></a></h3><p>State of threshold_2. Value can be found in the published state on the <code>threshold_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-2-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-2-protection-binary"><span>Threshold 2 protection (binary)</span></a></h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_2_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold 2 protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-2-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-2-value-numeric"><span>Threshold 2 value (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>threshold_2_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="clear-fault-binary" tabindex="-1"><a class="header-anchor" href="#clear-fault-binary"><span>Clear fault (binary)</span></a></h3><p>Turn ON to clear last the fault. Value can be found in the published state on the <code>clear_fault</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_fault&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> clear fault is ON, if <code>OFF</code> OFF.</p><h3 id="meter-id-text" tabindex="-1"><a class="header-anchor" href="#meter-id-text"><span>Meter id (text)</span></a></h3><p>Meter ID (ID of device). Value can be found in the published state on the <code>meter_id</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32))])}]]),i=JSON.parse('{"path":"/devices/DAC2161C.html","title":"MatSee Plus DAC2161C control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"MatSee Plus DAC2161C control via MQTT","description":"Integrate your MatSee Plus DAC2161C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:27.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Fault (enum)","slug":"fault-enum","link":"#fault-enum","children":[]},{"level":3,"title":"Threshold 1 (enum)","slug":"threshold-1-enum","link":"#threshold-1-enum","children":[]},{"level":3,"title":"Threshold 1 protection (binary)","slug":"threshold-1-protection-binary","link":"#threshold-1-protection-binary","children":[]},{"level":3,"title":"Threshold 1 value (numeric)","slug":"threshold-1-value-numeric","link":"#threshold-1-value-numeric","children":[]},{"level":3,"title":"Threshold 2 (enum)","slug":"threshold-2-enum","link":"#threshold-2-enum","children":[]},{"level":3,"title":"Threshold 2 protection (binary)","slug":"threshold-2-protection-binary","link":"#threshold-2-protection-binary","children":[]},{"level":3,"title":"Threshold 2 value (numeric)","slug":"threshold-2-value-numeric","link":"#threshold-2-value-numeric","children":[]},{"level":3,"title":"Clear fault (binary)","slug":"clear-fault-binary","link":"#clear-fault-binary","children":[]},{"level":3,"title":"Meter id (text)","slug":"meter-id-text","link":"#meter-id-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735588649000},"filePathRelative":"devices/DAC2161C.md"}')}}]);