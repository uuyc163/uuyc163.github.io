window.CODES = {
 "cant-connect": {
  "cat": "Connection / drops",
  "name": "Can't connect / connection failed",
  "alias": "cant connect cannot connect connection failed connect failed timeout cant get in 连不上",
  "sym": "The client says \"couldn't connect to the remote computer / connection failed / timeout\"; you can't get into the host.",
  "cause": "Host not powered on / not logged in / offline, firewall or antivirus blocking, faulty remote toggle, changed home IP, or the port is taken.",
  "fix": "1) Confirm the host is powered on, logged in and online; 2) allow UU Remote through firewall and antivirus; 3) toggle the remote switch off then on to reset; 4) restart the router to refresh the IP; 5) if port 3389 is taken, change it or stop the conflicting program.",
  "prevent": "Give the host a fixed LAN IP, add it to the trust list, keep it powered and online.",
  "sev": "High"
 },
 "black-screen": {
  "cat": "Display / black screen",
  "name": "Black screen after connecting",
  "alias": "black screen blackscreen no picture blank screen connected black 黑屏",
  "sym": "Connected but the picture is all black, often while you can still hear sound and see the mouse.",
  "cause": "Resolution not supported, the game's fullscreen resolution != the streaming resolution, an old GPU driver, or corrupt persistent bitmap caching.",
  "fix": "1) Switch the host to a common resolution like 1080p; 2) set the fullscreen game to windowed; 3) update the GPU driver; 4) disable \"persistent bitmap caching\" (RDP Experience tab).",
  "prevent": "Use a compatible resolution, keep the GPU driver recent.",
  "sev": "High"
 },
 "lag": {
  "cat": "Latency / lag",
  "name": "Lag / input delay",
  "alias": "lag latency delay input delay stutter dropped frames slow choppy 卡顿",
  "sym": "Noticeable input delay, stutter / dropped frames, poor responsiveness.",
  "cause": "Network congestion / packet loss, weak Wi-Fi, low host upload, bitrate above bandwidth, or abnormal encoder latency from a new GPU driver.",
  "fix": "1) Switch to wired or move close to 5GHz Wi-Fi; 2) lower the bitrate/bandwidth limit to leave headroom; 3) check packet loss, close other bandwidth-hungry apps; 4) roll back the host GPU driver to a stable version.",
  "prevent": "Prefer wired; keep bitrate < upload with headroom.",
  "sev": "Medium"
 },
 "disconnect": {
  "cat": "Connection / drops",
  "name": "Frequent drops / disconnects after seconds",
  "alias": "disconnect frequent drops drops after seconds keeps disconnecting auto disconnect 掉线",
  "sym": "Drops after a few seconds or a minute, reconnecting repeatedly.",
  "cause": "Network instability / packet loss, no keep-alive configured, a security-layer or certificate issue, or a TermDD X.224 protocol error (Event ID 50).",
  "fix": "1) Check packet loss and routing stability; 2) configure a keep-alive interval on the host; 3) review the security layer and encryption settings; 4) check Event Viewer Event ID 50 to locate the protocol interruption.",
  "prevent": "Stable network, correct security layer and certificate.",
  "sev": "High"
 },
 "no-audio": {
  "cat": "Sound / peripheral",
  "name": "No sound",
  "alias": "no sound no audio cant hear silent muted no speaker 没声音",
  "sym": "Picture is fine but there's no sound on the remote end.",
  "cause": "The host has no usable audio device (a cloud PC / no speaker shows \"No speakers or headphones are plugged in\"), or the wrong capture device is selected.",
  "fix": "1) Install a virtual audio device (like VB-Cable) on the host; 2) pick the right capture device in settings; 3) if someone is connected, reconnect for the change to apply.",
  "prevent": "Make sure the host has a usable audio output device.",
  "sev": "Medium"
 },
 "controller": {
  "cat": "Sound / peripheral",
  "name": "Controller / peripheral not detected",
  "alias": "controller gamepad not detected peripheral keyboard mouse joystick no response 手柄",
  "sym": "A controller, keyboard/mouse or other peripheral isn't detected or doesn't respond on the remote end.",
  "cause": "Controller passthrough not enabled on the client, missing controller drivers on the host, or another program holding the device exclusively.",
  "fix": "1) Enable controller/peripheral passthrough in UU Remote; 2) install the matching controller driver on the host; 3) reconnect and close the program holding the device exclusively.",
  "prevent": "Install drivers ahead of time and enable passthrough.",
  "sev": "Medium"
 },
 "port-conflict": {
  "cat": "Connection / drops",
  "name": "Port conflict / listener issue",
  "alias": "port conflict port 3389 port in use listener netstat port taken 端口",
  "sym": "Abnormal listener / connection refused, common on self-hosted / same-machine RDP.",
  "cause": "The default RDP port 3389 (or your configured port) is taken by another program.",
  "fix": "1) Use netstat -a -o to find the PID using the port; 2) match it with tasklist /svc; 3) change the port or stop the conflicting program, then restart the remote service.",
  "prevent": "Avoid multiple remote tools fighting over the same port.",
  "sev": "Medium"
 },
 "sleep-wake": {
  "cat": "Connection / drops",
  "name": "Can't connect when asleep/hibernating",
  "alias": "sleep hibernate wake wol wake on lan cant connect asleep standby 睡眠",
  "sym": "The host is unresponsive and won't connect no matter what.",
  "cause": "The host went to sleep or hibernate, so the NIC is powered down and can't respond.",
  "fix": "1) Set the host power plan to never sleep/hibernate; 2) wake it with Wake-on-LAN or UU remote power-on; 3) start the connection after it wakes.",
  "prevent": "Disable sleep/hibernate, set up remote power-on.",
  "sev": "Medium"
 },
 "ipv6": {
  "cat": "Connection / drops",
  "name": "IPv6 causing a flaky connection",
  "alias": "ipv6 flaky intermittent sometimes connects unstable on and off 时连时断",
  "sym": "Intermittently can't connect, works on and off, connects again on another network.",
  "cause": "The system adapts poorly to IPv6 and prefers an unreachable IPv6 path.",
  "fix": "1) Temporarily disable IPv6 to test whether it recovers; 2) switch the router/system to IPv4; 3) make sure both ends use the same network stack.",
  "prevent": "Keep both ends on the same stack; disable IPv6 if needed.",
  "sev": "Low"
 },
 "artifacts": {
  "cat": "Display / black screen",
  "name": "Artifacts / blurry image",
  "alias": "artifacts blurry blur macroblock pixelated low quality not sharp 花屏",
  "sym": "Artifacts / macroblocking, or an overall blurry, unclear image.",
  "cause": "Bitrate too low and auto-downscaled, abnormal hardware decoding, or packet loss breaking the picture.",
  "fix": "1) Raise the bitrate; 2) disable hardware decoding on host/client to try software decoding; 3) check packet loss and network stability.",
  "prevent": "Give enough bitrate; keep the network stable and loss-free.",
  "sev": "Low"
 },
 "security-error": {
  "cat": "Connection / drops",
  "name": "Security error - can't connect",
  "alias": "security error certificate encryption authentication credential cant connect terminal 安全错误",
  "sym": "Says \"because of a security error, the client could not connect to the remote computer\".",
  "cause": "Misconfigured authentication/encryption layer, or a corrupt license (authorization) certificate.",
  "fix": "1) Configure the correct security layer and encryption level; 2) if the license certificate is corrupt, back up then delete the X509 certificate registry keys and re-activate the licensing service; 3) confirm time and credentials are correct.",
  "prevent": "Correct certificate and licensing configuration.",
  "sev": "High"
 },
 "no-permission": {
  "cat": "Sound / peripheral",
  "name": "Account lacks remote permission",
  "alias": "no permission permission denied access denied remote desktop users connection limit logon rights 权限",
  "sym": "After logging in you can't start remote control, with a no-permission or denied prompt.",
  "cause": "The account isn't in the \"Remote Desktop Users\" group, or the \"Limit number of connections\" policy is blocking it.",
  "fix": "1) Add the account to the host's \"Remote Desktop Users\" group; 2) check and relax the \"Limit number of connections\" group policy; 3) confirm the account has remote logon rights.",
  "prevent": "Authorize accounts correctly, reasonable connection-limit policy.",
  "sev": "Medium"
 }
};
window.LABELS = {"miss": "Not listed - try other wording (e.g. can't connect / black screen / lag / no sound / controller), or see the full fault lookup table below.", "codeword": ""};
window.FIELDS = [["sym", "Symptom"], ["cause", "Most likely cause"], ["fix", "Fix steps"], ["prevent", "Prevention / self-check"], ["sev", "Severity"]];
window.THEAD = ["Issue", "Category", "Symptom", "Fix direction"];
window.CHIPS = ["can't connect", "black screen", "lag", "no sound", "disconnect", "controller"];
