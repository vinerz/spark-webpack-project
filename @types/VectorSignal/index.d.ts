/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../VectorSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../this/index.d.ts" />
declare interface VectorSignal {
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X component of the vector.
*/ 
x: ScalarSignal;
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y component of the vector.
*/ 
y: ScalarSignal;
/** 
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component of the vector.
*/ 
z: ScalarSignal;
/** 
*  
 * expSmooth(dampFactor: number): VectorSignal
 *  
 * 
 * Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
 * 
 * **Note**: See also `ReactiveModule.expSmooth`.
 */expSmooth(dampFactor: number): VectorSignal
 ;

/** 
*  
 * normalize(v: VectorSignal): VectorSignal
 * normalize(): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */normalize(v: VectorSignal): VectorSignal
 ;

normalize(): VectorSignal
 ;

/** 
*  
 * ceil(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.ceil`
 */ceil(): ScalarSignal
 ;

/** 
*  
 * neg(): ScalarSignal
 * neg(): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * 
 * **See Also**: `ReactiveModule.neg`, `ScalarSignal.neg`, `VectorSignal.neg`
 */neg(): ScalarSignal
 ;

neg(): VectorSignal
 ;

/** 
*  
 * abs(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * 
 * **See Also**: `ReactiveModule.abs`
 */abs(): ScalarSignal
 ;

/** 
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * sqrt(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.sqrt`
 */sqrt(): ScalarSignal
 ;

/** 
*  
 * div(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.div`
 */div(other: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * sign(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * 
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ReactiveModule.sign`
 */sign(): ScalarSignal
 ;

/** 
*  
 * sum(other: ScalarSignal): ScalarSignal
 * sum(other: VectorSignal): PointSignal
 * sum(other: VectorSignal): VectorSignal
 * sum(other: PointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ScalarSignal.sum`, ReactiveModule.add`
 */sum(other: ScalarSignal): ScalarSignal
 ;

sum(other: VectorSignal): PointSignal
 ;

sum(other: VectorSignal): VectorSignal
 ;

sum(other: PointSignal): PointSignal
 ;

/** 
*  
 * pow(exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal. The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ReactiveModule.pow`
 */pow(exponent: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 * reflect(normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 ;

reflect(normal: VectorSignal): VectorSignal
 ;

/** 
*  
 * add(other: ScalarSignal): ScalarSignal
 * add(other: VectorSignal): PointSignal
 * add(other: VectorSignal): VectorSignal
 * add(other: PointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ScalarSignal.sum`, ReactiveModule.add`
 */add(other: ScalarSignal): ScalarSignal
 ;

add(other: VectorSignal): PointSignal
 ;

add(other: VectorSignal): VectorSignal
 ;

add(other: PointSignal): PointSignal
 ;

/** 
*  
 * sub(other: ScalarSignal): ScalarSignal
 * sub(other: PointSignal): VectorSignal
 * sub(other: VectorSignal): PointSignal
 * sub(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * 
 * **See Also**: `ReactiveModule.sub`, `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */sub(other: ScalarSignal): ScalarSignal
 ;

sub(other: PointSignal): VectorSignal
 ;

sub(other: VectorSignal): PointSignal
 ;

sub(other: VectorSignal): VectorSignal
 ;

/** 
*  
 * mod(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.mod`
 */mod(other: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * mul(other: ScalarSignal): ScalarSignal
 * mul(other: VectorSignal): VectorSignal
 * mul(other: ScalarSignal): VectorSignal
 * mul(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * 
 * **See Also**: `ReactiveModule.mul`, `ScalarSignal.mul`, `VectorSignal.mul`
 */mul(other: ScalarSignal): ScalarSignal
 ;

mul(other: VectorSignal): VectorSignal
 ;

mul(other: ScalarSignal): VectorSignal
 ;

mul(other: ScalarSignal): VectorSignal
 ;

/** 
*  
 * atan2(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * 
 * **See Also**: `ReactiveModule.atan2`
 */atan2(other: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * magnitude(): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */magnitude(): ScalarSignal
 ;

/** 
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * dot(other: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * 
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */dot(other: VectorSignal): ScalarSignal
 ;

/** 
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 ;

/** 
*  
 * round(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * 
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ReactiveModule.round`
 */round(): ScalarSignal
 ;

/** 
*  
 * floor(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.floor`
 */floor(): ScalarSignal
 ;

/** 
*  
 * cross(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * 
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */cross(other: VectorSignal): VectorSignal
 ;

/** 
*  
 * distance(other: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */distance(other: PointSignal): ScalarSignal
 ;

/** 
*  
 * delayBy(timeSpan: {milliseconds: number}): this
 *  
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */delayBy(timeSpan: {milliseconds: number}): this
 ;

} 
