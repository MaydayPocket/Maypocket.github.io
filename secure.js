onst noScreenshot = require('secure-web');
noScreenshot({
 disableRightClick: true,
 disableKeyboardShortcuts: true,
 disableInspectElement: true,
 disablePrintScreen: true,
 disableScreenshot: true,
 disableFunctionKeys: true,
 disableCtrlF4: true,
 mouseLeave: true,
 ctrlOverlay: true,
 altOverlay: false,
 shiftOverlay: false,
 } 

 #customOverlay.show {
    visibility: visible;
}
 <div id="customOverlay">
    <p>No screenshots</p>
</div>
 });
