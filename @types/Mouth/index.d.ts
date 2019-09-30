/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
declare interface Mouth {
/** 
* ```
(get) upperLipCurvature: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating how high or low the mouth angles are with respect to the lip center. 0.0 is a straight line. Mouth angles higher than the lip center yield positive curvature, lowering the mouth angles makes it negative.
*/ 
upperLipCurvature: ScalarSignal;
/** 
* ```
(get) upperLipCenter: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the center of the upper lip in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
upperLipCenter: PointSignal;
/** 
* ```
(get) lowerLipCurvature: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating how high or low the mouth angles are with respect to the lip center. 0.0 is a straight line. Mouth angles higher than the lip center yield positive curvature, lowering the mouth angles makes it negative.
*/ 
lowerLipCurvature: ScalarSignal;
/** 
* ```
(get) openness: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the openness of the mouth. The openness of the mouth is a non-negative value where 0.0 is mouth closed and 1.0 mouth wide open (it can also take values greater than 1.0).
*/ 
openness: ScalarSignal;
/** 
* ```
(get) center: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the center of the mouth in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
center: PointSignal;
/** 
* ```
(get) lowerLipCenter: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the center of the lower lip in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
lowerLipCenter: PointSignal;
/** 
* ```
(get) rightCorner: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the right corner of the mouth in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
rightCorner: PointSignal;
/** 
* ```
(get) leftCorner: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the left corner of the mouth in the face local coordinate system.

**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/ 
leftCorner: PointSignal;
} 
