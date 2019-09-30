/// <reference path="../CameraPosition/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../InsetsSignal/index.d.ts" />
/// <reference path="../PixelSizeSignal/index.d.ts" />
declare namespace CameraInfoModule {
/** 
* ```
(get) captureDevicePosition: CameraPosition
(set) (Not Available)
```

Specifies a `CameraPosition` enum value identifying the current camera in use on the device.
*/ 
const captureDevicePosition: CameraPosition;
/** 
* ```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/ 
const isRecordingVideo: BoolSignal;
/** 
* ```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/ 
const isCapturingPhoto: BoolSignal;
/** 
* ```
(get) effectSafeAreaInsets: InsetsSignal
(set) (Not Available)
```

Specifies an `InsetsSignal` indicating the insets of the effect safe area.
*/ 
const effectSafeAreaInsets: InsetsSignal;
/** 
* ```
(get) previewSize: PixelSizeSignal
(set) (Not Available)
```

Specifies a `PixelSizeSignal` describing the size of the preview, in pixels.
*/ 
const previewSize: PixelSizeSignal;
} 
export = CameraInfoModule;