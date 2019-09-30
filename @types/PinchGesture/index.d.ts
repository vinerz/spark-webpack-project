/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface PinchGesture {
/** 
* ```
(get) location: PixelPointSignal
(set) (Not Available)
```
Specifies a [`PixelPointSignal`](/docs/camera-effects/reference/reactive_module/pixelpointsignal_class) that represents the current center point between two touches of the pinch gesture in screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of pinching on a specific object.
*/ 
location: PixelPointSignal;
/** 
* ```
(get) scale: ScalarSignal
(set) (Not Available)
```

Specifies a [`ScalarSignal`](/docs/camera-effects/reference/reactive_module/scalarsignal_class) representing the scale factor indicated by the gesture.
*/ 
scale: ScalarSignal;
} 
