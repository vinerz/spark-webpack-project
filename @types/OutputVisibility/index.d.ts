/// <reference path="../BoolValue/index.d.ts" />
declare interface OutputVisibility {
/** 
* ```
(get) forPreviewOutput: BoolValue
(set) forPreviewOutput: BoolSignal
```

Specifies whether the object is visible on the preview output.
*/ 
forPreviewOutput: BoolValue;
/** 
* ```
(get) forCaptureOutput: BoolValue
(set) forCaptureOutput: BoolSignal
```

Specifies whether the object is visible on the capture output.
*/ 
forCaptureOutput: BoolValue;
/** 
* ```
(get) forOverlayOutput: BoolValue
(set) forOverlayOutput: BoolSignal
```

Specifies whether the object is visible on the overlay output.
*/ 
forOverlayOutput: BoolValue;
} 
