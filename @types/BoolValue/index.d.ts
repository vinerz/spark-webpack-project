/// <reference path="../boolean/index.d.ts" />
/// <reference path="../ConstBoolSignal/index.d.ts" />
declare interface BoolValue {
/** 
* ```
(get) lastValue: boolean
(set) (Not Available)
```

Specifies a Boolean representing the last value of the object.
*/ 
lastValue: boolean;
/** 
*  
 * pinLastValue(): ConstBoolSignal
 *  
 * 
 * Returns a `ConstBoolSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstBoolSignal can be passed to a functions which accept bools.
 */pinLastValue(): ConstBoolSignal
 ;

} 
