"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44159],{52789:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>l});var o=i(6254);const n={},a=(0,i(89596).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"heiman-hs-720es",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#heiman-hs-720es"},[(0,o.Lk)("span",null,"HEIMAN HS-720ES")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"HS-720ES")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=HEIMAN"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("HEIMAN")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Carbon monoxide alarm")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"carbon_monoxide, co, self_test_result, battery, silence, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HS-720ES.png",alt:"HEIMAN HS-720ES"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>co_calibration</code>: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="carbon-monoxide-binary" tabindex="-1"><a class="header-anchor" href="#carbon-monoxide-binary"><span>Carbon monoxide (binary)</span></a></h3><p>Indicates if CO (carbon monoxide) is detected. Value can be found in the published state on the <code>carbon_monoxide</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> carbon monoxide is ON, if <code>false</code> OFF.</p><h3 id="co-numeric" tabindex="-1"><a class="header-anchor" href="#co-numeric"><span>CO (numeric)</span></a></h3><p>The measured CO (carbon monoxide) value. Value can be found in the published state on the <code>co</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum"><span>Self test result (enum)</span></a></h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary"><span>Silence (binary)</span></a></h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14))])}]]),l=JSON.parse('{"path":"/devices/HS-720ES.html","title":"HEIMAN HS-720ES control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HEIMAN HS-720ES control via MQTT","description":"Integrate your HEIMAN HS-720ES via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:36:06.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Carbon monoxide (binary)","slug":"carbon-monoxide-binary","link":"#carbon-monoxide-binary","children":[]},{"level":3,"title":"CO (numeric)","slug":"co-numeric","link":"#co-numeric","children":[]},{"level":3,"title":"Self test result (enum)","slug":"self-test-result-enum","link":"#self-test-result-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735588649000},"filePathRelative":"devices/HS-720ES.md"}')}}]);