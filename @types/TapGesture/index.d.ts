/// <reference path="../Point2D/index.d.ts" />
declare interface TapGesture {
/** 
* ```
(get) location: Point2D
(set) (Not Available)
```

Specifies a [`Point2D`](/docs/camera-effects/reference/reactive_module/point2d_class) representing the location of the tap, in pixels screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of tapping on a specific object.
*/ 
location: Point2D;
} 
