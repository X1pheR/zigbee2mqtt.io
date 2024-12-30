"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20129],{12675:(n,s,e)=>{e.r(s),e.d(s,{comp:()=>t,data:()=>l});var a=e(6254);const i={},t=(0,e(89596).A)(i,[["render",function(n,s){const e=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[s[26]||(s[26]=(0,a.Fv)('<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h1><p>These instructions explain how to run Zigbee2MQTT on Linux.</p><p>For the sake of simplicity this guide assumes running on a Raspberry Pi 4 with Raspbian Stretch Lite, but it should work on any Linux machine.</p><p>Therefore the user <code>pi</code> is used the following examples, but the user may differ between distributions e.g. <code>openhabian</code> should be used on Openhabian.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Before starting make sure you have an MQTT broker installed on your system. There are many tutorials available on how to do this, <a href="https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/" target="_blank" rel="noopener noreferrer">example</a>. Mosquitto is the recommended MQTT broker but others should also work fine.</p></div><h2 id="determine-location-of-the-adapter-and-checking-user-permissions" tabindex="-1"><a class="header-anchor" href="#determine-location-of-the-adapter-and-checking-user-permissions"><span>Determine location of the adapter and checking user permissions</span></a></h2><p>We first need to determine the location of the adapter. Connect the adapter to your Raspberry Pi. Most of the times the location is <code>/dev/ttyACM0</code>. This can be verified by:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pi@raspberry:~ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/ttyACM0</span>\n<span class="line">crw-rw---- <span class="token number">1</span> root dialout <span class="token number">166</span>, <span class="token number">0</span> May <span class="token number">16</span> <span class="token number">19</span>:15 /dev/ttyACM0  <span class="token comment"># &lt;-- adapter (CC2531 in this case) on /dev/ttyACM0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternately, if you are using an ethernet connected adapter, follow the instructions given for your specific device.</p>',9)),(0,a.Lk)("p",null,[s[1]||(s[1]=(0,a.eW)("However, it is ")),s[2]||(s[2]=(0,a.Lk)("strong",null,"recommended",-1)),s[3]||(s[3]=(0,a.eW)(' to use "by ID" mapping of the device (see ')),(0,a.bF)(e,{to:"/guide/configuration/adapter-settings.html"},{default:(0,a.k6)((()=>s[0]||(s[0]=[(0,a.eW)("Adapter settings")]))),_:1}),s[4]||(s[4]=(0,a.eW)("). This kind of device path mapping is more stable, but can also be handy if you have multiple serial devices connected to your Raspberry Pi. In the example below the device location is: ")),s[5]||(s[5]=(0,a.Lk)("code",null,"/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00",-1))]),s[27]||(s[27]=(0,a.Fv)('<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pi@raspberry:/ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/serial/by-id</span>\n<span class="line">total <span class="token number">0</span></span>\n<span class="line">lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing"><span>Installing</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Set up Node.js repository and install Node.js + required dependencies</span></span>\n<span class="line"><span class="token comment"># NOTE 1: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v20.9.0/ e.g. Version 20.9.0 should work.</span></span>\n<span class="line"><span class="token comment"># NOTE 2: For Ubuntu see tip below</span></span>\n<span class="line"><span class="token comment"># NOTE 3: Curl might have to be installed first via apt update &amp;&amp; apt install curl</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_20.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -</span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs <span class="token function">git</span> <span class="token function">make</span> g++ gcc libsystemd-dev</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Verify that the correct nodejs and npm (automatically installed with nodejs)</span></span>\n<span class="line"><span class="token comment"># version has been installed</span></span>\n<span class="line"><span class="token function">node</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output V18.x, V20.x, V21.X</span></span>\n<span class="line"><span class="token function">npm</span> <span class="token parameter variable">--version</span>  <span class="token comment"># Should output 9.X or 10.X</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Create a directory for zigbee2mqtt and set your user as owner of it</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">${<span class="token environment constant">USER</span>}</span><span class="token builtin class-name">:</span> /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Clone Zigbee2MQTT repository</span></span>\n<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Install dependencies (as user &quot;pi&quot;)</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">npm</span> ci</span>\n<span class="line"><span class="token comment"># If this command fails and returns an ERR_SOCKET_TIMEOUT error, run this command instead: npm ci  --maxsockets 1</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Build the app</span></span>\n<span class="line"><span class="token function">npm</span> run build</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If everything went correctly the output of <code>npm ci</code> is similar to (the number of packages and seconds is probably different on your device):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">node-pre-gyp info ok</span>\n<span class="line">added <span class="token number">383</span> packages <span class="token keyword">in</span> <span class="token number">111</span>.613s</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the <code>npm ci</code> produces some <code>warning</code> which can be ignored.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>On Ubuntu, Node.js can be installed through Snap</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Install latest nodejs from snap store</span></span>\n<span class="line"><span class="token comment"># The --classic argument is required here as Node.js needs full access to your system in order to be useful.</span></span>\n<span class="line"><span class="token comment"># You can also use the --channel=XX argument to install a legacy version where XX is the version you want to install (we need 14+).</span></span>\n<span class="line"><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token function">node</span> <span class="token parameter variable">--classic</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Verify node has been installed</span></span>\n<span class="line"><span class="token comment"># If you encounter an error at this stage and used the snap store instructions, adjust the BIN path as follows:</span></span>\n<span class="line"><span class="token comment">## PATH=$PATH:/snap/node/current/bin</span></span>\n<span class="line"><span class="token comment"># then re-verify nodejs and npm versions as above</span></span>\n<span class="line"><span class="token function">node</span> <span class="token parameter variable">--version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring"><span>Configuring</span></a></h2><p>Before we can start Zigbee2MQTT we need to copy and edit the <code>configuration.yaml</code> file. This file contains the configuration which will be used by Zigbee2MQTT.</p><p>Copy and open the configuration file:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> /opt/zigbee2mqtt/data/configuration.example.yaml /opt/zigbee2mqtt/data/configuration.yaml</span>\n<span class="line"><span class="token function">nano</span> /opt/zigbee2mqtt/data/configuration.yaml</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',11)),(0,a.Lk)("p",null,[s[7]||(s[7]=(0,a.eW)("For a basic configuration, the default settings are probably good. The only thing we need to change is the MQTT server url/authentication and the serial port (in some cases, your adapter might need additional configuration parameters, see ")),(0,a.bF)(e,{to:"/guide/adapters/"},{default:(0,a.k6)((()=>s[6]||(s[6]=[(0,a.eW)("supported Adapters")]))),_:1}),s[8]||(s[8]=(0,a.eW)("). This can be done by changing the section below in your ")),s[9]||(s[9]=(0,a.Lk)("code",null,"configuration.yaml",-1)),s[10]||(s[10]=(0,a.eW)("."))]),s[28]||(s[28]=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># MQTT settings</span></span>\n<span class="line"><span class="token key atrule">mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># MQTT base topic for Zigbee2MQTT MQTT messages</span></span>\n<span class="line">    <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">    <span class="token comment"># MQTT server URL</span></span>\n<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost&#39;</span></span>\n<span class="line">    <span class="token comment"># MQTT server authentication, uncomment if required:</span></span>\n<span class="line">    <span class="token comment"># user: my_user</span></span>\n<span class="line">    <span class="token comment"># password: my_password</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Serial settings</span></span>\n<span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Location of the adapter (see first step of this guide)</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyACM0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save the file and exit.</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt"><span>Starting Zigbee2MQTT</span></a></h2><p>Now that we have setup everything correctly we can start Zigbee2MQTT.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"><span class="token function">npm</span> start</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>When started successfully, you will see something like:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting zigbee-herdsman<span class="token punctuation">..</span>.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: zigbee-herdsman started</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Coordinator firmware version: <span class="token string">&#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span></span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Currently <span class="token number">0</span> devices are joined:</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> <span class="token builtin class-name">set</span> to  <span class="token variable"><span class="token variable">`</span><span class="token boolean">true</span><span class="token variable">`</span></span> <span class="token keyword">in</span> configuration.yaml.</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Allowing new devices to join.</span>\n<span class="line">Zigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Set <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span><span class="token boolean">false</span><span class="token variable">`</span></span> once you joined all devices.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Zigbee: allowing new devices to join.</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost</span>\n<span class="line">Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connected to MQTT server</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zigbee2MQTT can be stopped by pressing <code>CTRL + C</code>.</p><h2 id="optional-running-as-a-daemon-with-systemctl" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-systemctl"><span>(Optional) Running as a daemon with systemctl</span></a></h2><p>To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Create a systemctl configuration file for Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/zigbee2mqtt.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add the following to this file:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[Unit]</span>\n<span class="line">Description=zigbee2mqtt</span>\n<span class="line">After=network.target</span>\n<span class="line"></span>\n<span class="line">[Service]</span>\n<span class="line">Environment=NODE_ENV=production</span>\n<span class="line">Type=notify</span>\n<span class="line">ExecStart=/usr/bin/node index.js</span>\n<span class="line">WorkingDirectory=/opt/zigbee2mqtt</span>\n<span class="line">StandardOutput=inherit</span>\n<span class="line"># Or use StandardOutput=null if you don&#39;t want Zigbee2MQTT messages filling syslog, for more options see systemd.exec(5)</span>\n<span class="line">StandardError=inherit</span>\n<span class="line">WatchdogSec=10s</span>\n<span class="line">Restart=always</span>\n<span class="line">RestartSec=10s</span>\n<span class="line">User=pi</span>\n<span class="line"></span>\n<span class="line">[Install]</span>\n<span class="line">WantedBy=multi-user.target</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If you are using a Raspberry Pi 1 or Zero AND if you followed this <a href="https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb" target="_blank" rel="noopener noreferrer">guide</a>, replace <code>ExecStart=/usr/bin/node index.js</code> with <code>ExecStart=/usr/local/bin/node index.js</code>.</p></blockquote><blockquote><p>If you are using a Raspberry Pi or a system running from a SD card, you will likely want to minimize the amount of log files written to disk. Systemd service with <code>StandardOutput=inherit</code> will result in logging everything twice: once in <code>journalctl</code> through the systemd unit and once from Zigbee2MQTT default logging to files under <code>data/log</code>. You will likely want to keep only one of them:</p><blockquote><p>Keep only the logs under <code>data/log</code> --&gt; use <code>StandardOutput=null</code> in the systemd unit. <strong>or</strong></p><p>Keep only the <code>journalctl</code> logging --&gt; set <a href="https://www.zigbee2mqtt.io/guide/configuration/logging.html" target="_blank" rel="noopener noreferrer"><code>advanced.log_output = [&#39;console&#39;]</code></a> in Zigbee2MQTT configuration.</p></blockquote></blockquote><blockquote><p>If you want to use another directory to place all Zigbee2MQTT data, add <code>Environment=ZIGBEE2MQTT_DATA=/path/to/data</code> below <code>[Service]</code></p></blockquote>',16)),(0,a.Lk)("blockquote",null,[(0,a.Lk)("p",null,[s[13]||(s[13]=(0,a.eW)("Using ")),s[14]||(s[14]=(0,a.Lk)("code",null,"Type=notify",-1)),s[15]||(s[15]=(0,a.eW)(" makes systemd aware of when zigbee2mqtt has started up and is e.g. listening on its ")),(0,a.bF)(e,{to:"/guide/configuration/frontend.html"},{default:(0,a.k6)((()=>s[11]||(s[11]=[(0,a.eW)("Frontend")]))),_:1}),s[16]||(s[16]=(0,a.eW)(" sockets. This is useful for starting other, dependent systemd units or for using the ")),s[17]||(s[17]=(0,a.Lk)("code",null,"ExecStartPost=",-1)),s[18]||(s[18]=(0,a.eW)(" attribute. For example, to allow a ")),(0,a.bF)(e,{to:"/guide/configuration/frontend.html#nginx-proxy-configuration"},{default:(0,a.k6)((()=>s[12]||(s[12]=[(0,a.eW)("Reverse Proxy")]))),_:1}),s[19]||(s[19]=(0,a.eW)(" to access zigbee2mqtt's Unix socket, you could add ")),s[20]||(s[20]=(0,a.Lk)("code",null,"ExecStartPost=setfacl -m u:www-data:rw /run/zigbee2mqtt/zigbee2mqtt.sock",-1)),s[21]||(s[21]=(0,a.eW)(" to the ")),s[22]||(s[22]=(0,a.Lk)("code",null,"[Service]",-1)),s[23]||(s[23]=(0,a.eW)(" section and ")),s[24]||(s[24]=(0,a.Lk)("code",null,"apt install acl",-1)),s[25]||(s[25]=(0,a.eW)("."))])]),s[29]||(s[29]=(0,a.Fv)('<p>Save the file and exit.</p><p>You need some <strong>systemd</strong> development files, on <strong>Ubuntu</strong> these can be installed via:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ sudo apt install g++ make libsystemd-dev make</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Verify that the configuration works:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Start Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> systemctl start zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Show status</span></span>\n<span class="line">systemctl status zigbee2mqtt.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output should look like:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service</span>\n<span class="line">● zigbee2mqtt.service - zigbee2mqtt</span>\n<span class="line">   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/zigbee2mqtt.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span></span>\n<span class="line">   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2018</span>-06-07 <span class="token number">20</span>:27:22 BST<span class="token punctuation">;</span> 3s ago</span>\n<span class="line"> Main PID: <span class="token number">665</span> <span class="token punctuation">(</span>npm<span class="token punctuation">)</span></span>\n<span class="line">   CGroup: /system.slice/zigbee2mqtt.service</span>\n<span class="line">           └─679 /usr/bin/node index.js</span>\n<span class="line"></span>\n<span class="line">Jun 07 <span class="token number">20</span>:27:22 raspberry systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started zigbee2mqtt.</span>\n<span class="line">Jun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt</span>\n<span class="line">Jun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> <span class="token function">node</span> index.js</span>\n<span class="line">Jun 07 <span class="token number">20</span>:27:24 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span></span>\n<span class="line">Jun 07 <span class="token number">20</span>:27:25 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that everything works, we want systemctl to start Zigbee2MQTT automatically on boot, this can be done by executing:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> zigbee2mqtt.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Done! 😃</p><p>Some tips that can be handy later:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Stopping Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> systemctl stop zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Starting Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> systemctl start zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># View the log of Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> zigbee2mqtt.service <span class="token parameter variable">-f</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version"><span>(For later) Update Zigbee2MQTT to the latest version</span></a></h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Run the update script from the Zigbee2MQTT directory</span></span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line">./update.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',15))])}]]),l=JSON.parse('{"path":"/guide/installation/01_linux.html","title":"Linux","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"headers":[{"level":2,"title":"Determine location of the adapter and checking user permissions","slug":"determine-location-of-the-adapter-and-checking-user-permissions","link":"#determine-location-of-the-adapter-and-checking-user-permissions","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"(Optional) Running as a daemon with systemctl","slug":"optional-running-as-a-daemon-with-systemctl","link":"#optional-running-as-a-daemon-with-systemctl","children":[]},{"level":2,"title":"(For later) Update Zigbee2MQTT to the latest version","slug":"for-later-update-zigbee2mqtt-to-the-latest-version","link":"#for-later-update-zigbee2mqtt-to-the-latest-version","children":[]}],"git":{"updatedTime":1735588649000},"filePathRelative":"guide/installation/01_linux.md"}')}}]);