const noScreenshot = require('secure-web');

noScreenshot({
    disableRightClick: true,
    disableKeyboardShortcuts: true,
    disableInspectElement: true,
    disablePrintScreen: true,
    disableScreenshot: true,
    disableFunctionKeys: true,
    disableCtrlF4: true,
    mouseLeave: false, // required for overlay with mouse leave a browser window
    mouseEnterAutoHide: true, // required for auto hide overlay with mouse enter a browser window
    ctrlOverlay: false, 
    altOverlay: false, // must be pass true for overlay with Alt or Options key press
    shiftOverlay: false, // must be pass true for overlay with Shift key press
} , 'custom-overlay');
