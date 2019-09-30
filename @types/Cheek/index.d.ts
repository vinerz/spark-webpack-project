/// <reference path="../PointSignal/index.d.ts" />
declare interface Cheek {
/** 
* ```
(get) center: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the center of the cheek in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
center: PointSignal;
/** 
* ```
(get) cheekbone: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the cheekbone in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
cheekbone: PointSignal;
} 
