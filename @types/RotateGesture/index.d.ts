/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface RotateGesture {
/** 
* ```
(get) location: PixelPointSignal
(set) (Not Available)
```

Specifies a [`PixelPointSignal`](/docs/camera-effects/reference/reactive_module/pixelpointsignal_class) object that represents the center point between two touches in screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of rotating on a specific object.
*/ 
location: PixelPointSignal;
/** 
* ```
(get) rotation: ScalarSignal
(set) (Not Available)
```

Specifies a [`ScalarSignal`](/docs/camera-effects/reference/reactive_module/scalarsignal_class) representing the rotation indicated by the gesture, in radians.
*/ 
rotation: ScalarSignal;
} 
