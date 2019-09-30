/// <reference path="../PointSignal/index.d.ts" />
declare interface Chin {
/** 
* ```
(get) tip: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the tip of the chin in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
tip: PointSignal;
} 
