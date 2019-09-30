/// <reference path="../PixelPointSignal/index.d.ts" />
declare interface PanGesture {
/** 
* ```
(get) location: PixelPointSignal
(set) (Not Available)
```

Specifies a [`PixelPointSignal`](/docs/camera-effects/reference/reactive_module/pixelpointsignal_class) that represents the location of the gesture in screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of panning on a specific object.
*/ 
location: PixelPointSignal;
/** 
* ```
(get) translation: PixelPointSignal
(set) (Not Available)
```

Specifies a [`PixelPointSignal`](/docs/camera-effects/reference/reactive_module/pixelpointsignal_class) indicating the position of the gesture, in screen coordinates, relative to the start point.

**Note**: The translation is always specified in the screen coordinates, even if the event was emitted as a result of panning on a specific object.
*/ 
translation: PixelPointSignal;
} 
