/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../RotationSignal/index.d.ts" />
declare interface Eyeball {
/** 
* ```
(get) iris: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the center point of the iris in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
iris: PointSignal;
/** 
* ```
(get) center: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the center point of the eyeball in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
center: PointSignal;
/** 
* ```
(get) rotation: RotationSignal
(set) (Not Available)
```

Specifies the rotation of the eyeball around its center.
*/ 
rotation: RotationSignal;
} 
