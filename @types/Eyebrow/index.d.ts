/// <reference path="../PointSignal/index.d.ts" />
declare interface Eyebrow {
/** 
* ```
(get) top: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the top of the eyebrow in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
top: PointSignal;
/** 
* ```
(get) insideEnd: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the inside end of the eyebrow in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
insideEnd: PointSignal;
/** 
* ```
(get) outsideEnd: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the outside end of the eyebrow in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
outsideEnd: PointSignal;
} 
