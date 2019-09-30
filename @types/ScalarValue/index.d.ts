/// <reference path="../number/index.d.ts" />
/// <reference path="../ConstScalarSignal/index.d.ts" />
declare interface ScalarValue {
/** 
* ```
(get) lastValue: number
(set) (Not Available)
```

Specifies a number representing the last value of the object.
*/ 
lastValue: number;
/** 
*  
 * pinLastValue(): ConstScalarSignal
 *  
 * 
 * Returns a `ConstScalarSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstScalarSignal can be passed to a functions which accept numbers.
 */pinLastValue(): ConstScalarSignal
 ;

} 
