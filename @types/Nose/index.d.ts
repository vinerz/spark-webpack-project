/// <reference path="../PointSignal/index.d.ts" />
declare interface Nose {
/** 
* ```
(get) tip: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the tip of the nose in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
tip: PointSignal;
/** 
* ```
(get) bridge: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the bridge of the nose in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
bridge: PointSignal;
/** 
* ```
(get) leftNostril: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the left nostril in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
leftNostril: PointSignal;
/** 
* ```
(get) rightNostril: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the right nostril in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
rightNostril: PointSignal;
} 
