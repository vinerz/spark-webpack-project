/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../ScaleSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../Rotation/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
declare interface Transform {
/** 
* ```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Specifies the object offset along the Y-axis of the object's local coordinate system.
*/ 
y: ScalarSignal;
/** 
* ```
(get) z: ScalarSignal
(set) z: ScalarSignal
```

Specifies the object offset along the Z-axis of the object's local coordinate system.
*/ 
z: ScalarSignal;
/** 
* ```
(get) scaleX: ScalarSignal
(set) scaleX: ScalarSignal
```

Specifies the object scale along the X-axis of the object's local coordinate system.
*/ 
scaleX: ScalarSignal;
/** 
* ```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Specifies the object offset along the X-axis of the object's local coordinate system.
*/ 
x: ScalarSignal;
/** 
* ```
(get) rotationX: ScalarSignal
(set) rotationX: ScalarSignal
```

Specifies the object rotation about the X-axis of the object's local coordinate system, in radians.

**Note**: the rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object, therefore it is always performed in the object's local coordinate system.
*/ 
rotationX: ScalarSignal;
/** 
* ```
(get) scaleY: ScalarSignal
(set) scaleY: ScalarSignal
```

Specifies the object scale along the Y-axis of the object's local coordinate system.
*/ 
scaleY: ScalarSignal;
/** 
* ```
(get) rotationY: ScalarSignal
(set) rotationY: ScalarSignal
```

Specifies the object rotation about the Y-axis of the object's rotated local coordinate system, in radians.

**Note**: the rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationY: ScalarSignal;
/** 
* ```
(get) rotationZ: ScalarSignal
(set) rotationZ: ScalarSignal
```

Specifies the object rotation about the Z-axis of the object's rotated local coordinate system, in radians.

**Note**: the rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationZ: ScalarSignal;
/** 
* ```
(get) scale: ScaleSignal
(set) scale: ScaleSignal
```

Specifies the object scale along the X, Y and Z axis.
*/ 
scale: ScaleSignal;
/** 
* ```
(get) position: PointSignal
(set) position: PointSignal
```

Specifies the object position along the X, Y and Z axis of the object's local coordinate system.
*/ 
position: PointSignal;
/** 
* ```
(get) (Not Available)
(set) rotation: Rotation
```

Specifies the object rotation along the X, Y and Z axis of the object's local coordinate system.
*/ 
rotation: Rotation;
/** 
* ```
(get) scaleZ: ScalarSignal
(set) scaleZ: ScalarSignal
```

Specifies the object scale along the Z-axis of the object's local coordinate system.
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

} 
