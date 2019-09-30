/// <reference path="../PixelPointSignal/index.d.ts" />
declare interface LongPressGesture {
/** 
* ```
(get) location: PixelPointSignal
(set) (Not Available)
```

Specifies a [`PixelPointSignal`](/docs/camera-effects/reference/reactive_module/pixelpointsignal_class) that represents the location of the gesture in screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of long pressing on a specific object.
*/ 
location: PixelPointSignal;
} 
