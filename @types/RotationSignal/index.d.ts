/// <reference path="../EulerAnglesSignal/index.d.ts" />
declare interface RotationSignal {
/** 
* ```
(get) eulerAngles: EulerAnglesSignal
(set) (Not Available)
```
Represents the Euler angle from the `RotationSignal`.

**Note**: the order of rotations for the Euler angles is the same as in `Transformation` class.
*/ 
eulerAngles: EulerAnglesSignal;
} 
