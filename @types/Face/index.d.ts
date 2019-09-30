/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../Mouth/index.d.ts" />
/// <reference path="../Eye/index.d.ts" />
/// <reference path="../Cheek/index.d.ts" />
/// <reference path="../Chin/index.d.ts" />
/// <reference path="../Nose/index.d.ts" />
/// <reference path="../Forehead/index.d.ts" />
/// <reference path="../Eyebrow/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../Expression/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
declare interface Face {
/** 
* ```
(get) isTracked: StringSignal
(set) (Not Available)
```

A `boolSignal` indicating whether the face was tracked this frame. 

 If the face was not tracked, other properties represent the most recent tracked frame.
*/ 
isTracked: StringSignal;
/** 
* ```
(get) mouth: Mouth
(set) (Not Available)
```

Specifies a `Mouth` object describing the attributes of the mouth.
*/ 
mouth: Mouth;
/** 
* ```
(get) rightEye: Eye
(set) (Not Available)
```

Specifies an `Eye` object describing the attributes of the right eye.
*/ 
rightEye: Eye;
/** 
* ```
(get) leftCheek: Cheek
(set) (Not Available)
```

Specifies a `Cheek` object describing the attributes of the left cheek.
*/ 
leftCheek: Cheek;
/** 
* ```
(get) chin: Chin
(set) (Not Available)
```

Specifies a `Chin` object describing the attributes of the chin.
*/ 
chin: Chin;
/** 
* ```
(get) id: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the unique ID assigned to a face. An ID is generated every time a face is detected and tracked in the scene.

When a face is lost and then tracked again, a new ID is generated even if it is the same person.
*/ 
id: StringSignal;
/** 
* ```
(get) nose: Nose
(set) (Not Available)
```

Specifies a `Nose` object describing the attributes of the nose.
*/ 
nose: Nose;
/** 
* ```
(get) forehead: Forehead
(set) (Not Available)
```

Specifies a `Forehead` object describing the attributes of the forehead.
*/ 
forehead: Forehead;
/** 
* ```
(get) rightEyebrow: Eyebrow
(set) (Not Available)
```

Specifies an `Eyebrow` object describing the attributes of the right eyebrow.
*/ 
rightEyebrow: Eyebrow;
/** 
* ```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the face transformation relative to camera coordinate system. 

**Note**: `cameraTransform.applyTo(point)`, where `point` is a point in face local coordinate system, returns a point in camera local coordinate system.
*/ 
cameraTransform: TransformSignal;
/** 
* ```
(get) rightCheek: Cheek
(set) (Not Available)
```

Specifies a `Cheek` object describing the attributes of the right cheek.
*/ 
rightCheek: Cheek;
/** 
* ```
(get) leftEye: Eye
(set) (Not Available)
```

Specifies an `Eye` object describing the attributes of the left eye.
*/ 
leftEye: Eye;
/** 
* ```
(get) leftEyebrow: Eyebrow
(set) (Not Available)
```

Specifies an `Eyebrow` object describing the attributes of the left eyebrow.
*/ 
leftEyebrow: Eyebrow;
/** 
* ```
(get) expression: Expression
(set) (Not Available)
```

Specifies an `Expression` object describing the facial expression coefficients on the tracked face.
*/ 
expression: Expression;
/** 
*  
 * point(u: ScalarSignal, v: ScalarSignal): PointSignal
 *  
 * 
 * Returns a `PointSignal` object representing a point in the face local coordinate system that corresponds to a UV point on the facial mesh texture map. 
 * 
 *  **See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
 */point(u: ScalarSignal, v: ScalarSignal): PointSignal
 ;

/** 
*  
 * landmark2D(index: number): PointSignal
 *  
 * 
 * Returns a `PointSignal` containing the location of the specified 2D landmark as a point in the focal plane (in 3D space).
 * 
 * **Note**: This method is for debug purposes only and may disappear without notice. Don't use it in production effects.
 */landmark2D(index: number): PointSignal
 ;

/** 
*  
 * deformationCoefficientAt(index: number): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the deformation coefficient associated with a tracked face at the specified index.
 */deformationCoefficientAt(index: number): ScalarSignal
 ;

} 
