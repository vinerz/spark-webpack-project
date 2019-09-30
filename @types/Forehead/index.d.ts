/// <reference path="../PointSignal/index.d.ts" />
declare interface Forehead {
/** 
* ```
(get) center: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the center of the forehead in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
center: PointSignal;
/** 
* ```
(get) top: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the top of the forehead in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
top: PointSignal;
} 
