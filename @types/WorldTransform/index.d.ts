/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../ScaleSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../VectorSignal/index.d.ts" />
declare interface WorldTransform {
/** 
* ```
(get) position: PointSignal
(set) position: PointSignal
```

Specifies the object position along the X, Y and Z axis of the world coordinate system.
*/ 
position: PointSignal;
/** 
* ```
(get) scale: ScaleSignal
(set) (Not Available)
```

Represents scale in the world coordinate system.
*/ 
scale: ScaleSignal;
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the offset along the X-axis of the world coordinate system.
*/ 
x: ScalarSignal;
/** 
* ```
(get) rotationX: ScalarSignal
(set) (Not Available)
```

Represents rotation about the X-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object.
*/ 
rotationX: ScalarSignal;
/** 
* ```
(get) scaleX: ScalarSignal
(set) (Not Available)
```

Represents scale along the X-axis of the world coordinate system.
*/ 
scaleX: ScalarSignal;
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Y-axis of the world coordinate system.
*/ 
y: ScalarSignal;
/** 
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Z-axis of the world coordinate system.
*/ 
z: ScalarSignal;
/** 
* ```
(get) rotationY: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Y-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationY: ScalarSignal;
/** 
* ```
(get) rotationZ: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Z-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationZ: ScalarSignal;
/** 
* ```
(get) scaleY: ScalarSignal
(set) (Not Available)
```

Represents scale along the Y-axis of the world coordinate system.
*/ 
scaleY: ScalarSignal;
/** 
* ```
(get) scaleZ: ScalarSignal
(set) (Not Available)
```

Represents scale along the Z-axis of the world coordinate system.
*/ 
scaleZ: ScalarSignal;
/** 
*  
 * toSignal(): TransformSignal
 *  
 * 
 * Returns a signal for a given transformation.
 */toSignal(): TransformSignal
 ;

/** 
*  
 * inverse(): TransformSignal
 *  
 * 
 * Returns a signal with the value that is equal to the inverted transformation value of the given signal at any point of time.
 */inverse(): TransformSignal
 ;

/** 
*  
 * applyTo(transform: TransformSignal): TransformSignal
 * applyTo(point: PointSignal): PointSignal
 * applyTo(vector: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is equal to the value of the provided transformation/point/vector with the transformation of the current `TransformSignal` applied to it.
 */applyTo(transform: TransformSignal): TransformSignal
 ;

applyTo(point: PointSignal): PointSignal
 ;

applyTo(vector: VectorSignal): VectorSignal
 ;

} 
