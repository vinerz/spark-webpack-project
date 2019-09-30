/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../ScaleSignal/index.d.ts" />
declare interface ScaleSignal {
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate of the scale.
*/ 
x: ScalarSignal;
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate of the scale.
*/ 
y: ScalarSignal;
/** 
* ```
  (get) z: ScalarSignal
  (set) (Not Available)
  ```

  Represents the Z coordinate of the scale.
*/ 
z: ScalarSignal;
/** 
*  
 * mul(other: ScaleSignal): ScaleSignal
 *  
 * 
 * Returns a signal with the value that is the element-wise multiplication of the values of the given signals.
 */mul(other: ScaleSignal): ScaleSignal
 ;

/** 
*  
 * div(other: ScaleSignal): ScaleSignal
 *  
 * 
 * Returns a signal with the value that is the element-wise division of the values of the given signals.
 */div(other: ScaleSignal): ScaleSignal
 ;

} 
