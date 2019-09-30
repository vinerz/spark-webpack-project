/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../VectorSignal/index.d.ts" />
/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../HsvaSignal/index.d.ts" />
/// <reference path="../ColorSampler/index.d.ts" />
/// <reference path="../ParticleTypeDescriptions/index.d.ts" />
/// <reference path="../ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../MaterialBase/index.d.ts" />
/// <reference path="../ScalarSampler/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface ParticleSystem {
/** 
* ```
(get) opticalFlowSensitivity: ScalarSignal
(set) opticalFlowSensitivity: ScalarSignal
```

Specifies the optical flow sensitivity.
*/ 
opticalFlowSensitivity: ScalarSignal;
/** 
* ```
(get) initialVelocityMagnitudePercentageDelta: ScalarSignal
(set) initialVelocityMagnitudePercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `initialVelocityMagnitude` property. The initial velocity magnitude is randomized uniformly in the range `[initialVelocityMagnitude * (1 - d); initialVelocityMagnitude * (1 + d)]` for each particle.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
initialVelocityMagnitudePercentageDelta: ScalarSignal;
/** 
* ```
(get) sprayAngleDelta: PointSignal
(set) sprayAngleDelta: PointSignal
```

Specifies the absolute delta value for the `sprayAngle` property. The initial velocity angle is randomized uniformly in the range `[sprayAngle - sprayAngleDelta; sprayAngle + sprayAngleDelta]` for each particle.
*/ 
sprayAngleDelta: PointSignal;
/** 
* ```
(get) (Not Available)
(set) acceleration: VectorSignal
```

Specifies the acceleration vector for particles of this emitter.
*/ 
acceleration: VectorSignal;
/** 
* ```
(get) linearDamping: ScalarSignal
(set) linearDamping: ScalarSignal
```

Specifies the mean linear damping of each particle.
*/ 
linearDamping: ScalarSignal;
/** 
* ```
(get) birthrateDelta: ScalarSignal
(set) birthrateDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `birthrate` property. Whenever a particle is spawned, an "instantaneous birthrate" is chosen uniformly in the range `[birthrate * (1 - d); birthrate * (1 + d)]` and the next particle will be spawned in (1/instantaneous birthrate) seconds.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
birthrateDelta: ScalarSignal;
/** 
* ```
(get) innerRadius: ScalarValue
(set) innerRadius: ScalarSignal
```

Specifies the radius of the inner circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.

**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/ 
innerRadius: ScalarValue;
/** 
* ```
(get) scaleDelta: ScalarSignal
(set) scaleDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `scale` property. The scale is randomized uniformly in the range `[scale * (1 - d); scale * (1 + d)]` for each particle.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
scaleDelta: ScalarSignal;
/** 
* ```
(get) linearDampingPercentageDelta: ScalarSignal
(set) linearDampingPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `linearDamping` property. The linear dumping is randomized uniformly in the range `[linearDamping * (1 - d); linearDamping * (1 + d)]` for each particle.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
linearDampingPercentageDelta: ScalarSignal;
/** 
* ```
(get) scale: ScalarSignal
(set) scale: ScalarSignal
```

Specifies the mean size of each particle, in 3d units.
*/ 
scale: ScalarSignal;
/** 
* ```
(get) angularVelocity: PointSignal
(set) angularVelocity: PointSignal
```

Specifies the mean angular velocity of each particle, in radians-per-second.
*/ 
angularVelocity: PointSignal;
/** 
* ```
(get) rotationalDamping: ScalarSignal
(set) rotationalDamping: ScalarSignal
```

Specifies the mean rotational damping of each particle.
*/ 
rotationalDamping: ScalarSignal;
/** 
* ```
(get) lifetimeSecondsPercentageDelta: ScalarSignal
(set) lifetimeSecondsPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `lifetimeSeconds` property. The lifetime is randomized uniformly in the range `[lifetimeSeconds * (1 - d); lifetimeSeconds * (1 + d)]` for each particle.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
lifetimeSecondsPercentageDelta: ScalarSignal;
/** 
* ```
(get) initialVelocityMagnitude: ScalarSignal
(set) initialVelocityMagnitude: ScalarSignal
```

Specifies the mean initial velocity magnitude of each particle.
*/ 
initialVelocityMagnitude: ScalarSignal;
/** 
* ```
(get) birthrate: ScalarSignal
(set) birthrate: ScalarSignal
```

Specifies the particle birthrate, in number of particles per second.
*/ 
birthrate: ScalarSignal;
/** 
* ```
(get) sprayAngle: PointSignal
(set) sprayAngle: PointSignal
```

Specifies the mean spray angle of the emitter, in radians.
*/ 
sprayAngle: PointSignal;
/** 
* ```
(get) initialVelocityAngle: ScalarSignal
(set) initialVelocityAngle: ScalarSignal
```

Specifies the mean initial velocity angle of each particle, in radians.
*/ 
initialVelocityAngle: ScalarSignal;
/** 
* ```
(get) initialVelocityAngleDelta: ScalarSignal
(set) initialVelocityAngleDelta: ScalarSignal
```

Specifies the absolute delta value for the `initialVelocityAngle` property. The initial velocity angle is randomized uniformly in the range `[initialVelocityAngle - initialVelocityAngleDelta; initialVelocityAngle + initialVelocityAngleDelta]` for each particle.
*/ 
initialVelocityAngleDelta: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) colorModulationHSVADelta: HsvaSignal
```

Specifies the absolute delta value for the `colorModulationHSVA` property. The modulation color will be randomized uniformly in the axis-aligned bounding box in the HSVA space with corners `colorModulationHSVA - d` and `colorModulationHSVA + d` for each particle.

**Note**: `colorModulationHSVA` can only be an instance of `HsvaSignal`, it cannot be specified in other color space like RGBA.

**Note**: if the hue component of the randomized modulation color is outside of the [0, 1] interval, it is taken modulo 1.0. If any of the saturation, value or alpha components is outside of the [0, 1] interval, its value is clamped.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/ 
colorModulationHSVADelta: HsvaSignal;
/** 
* ```
(get) initialRotation: ScalarSignal
(set) initialRotation: ScalarSignal
```

Specifies the mean rotation of each particle, in radians.
*/ 
initialRotation: ScalarSignal;
/** 
* ```
(get) initialRotationDelta: ScalarSignal
(set) initialRotationDelta: ScalarSignal
```

Specifies the absolute delta value for the `initialRotation` property. The initial rotation is randomized uniformly in the range `[initialRotation - initialRotationDelta; initialRotation + initialRotationDelta]` for each particle.
*/ 
initialRotationDelta: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) hsvaColorModulationModifier: ColorSampler
```

Specifies the modifier that will be added to the particle color according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.

**Note**: the modifier works in the HSVA color space, i.e. using values interpolated in RGBA won't add the corresponding R, G or B values to the current color but rather the converted HSV color will be added.
*/ 
hsvaColorModulationModifier: ColorSampler;
/** 
* ```
(get) (Not Available)
(set) positionDelta: VectorSignal
```

Specifies the absolute delta value for the `position` property. The position is randomized uniformly in the axis-aligned bounding box with corners `position - d` and `position + d` for each particle.

**Note**: all the coordinates must be non-negative. For negative values, the absolute value is used.
*/ 
positionDelta: VectorSignal;
/** 
* ```
(get) particleRotation: PointSignal
(set) particleRotation: PointSignal
```

Specifies the mean rotation of each particle, in radians.
*/ 
particleRotation: PointSignal;
/** 
* ```
(get) rotationalVelocityDelta: ScalarSignal
(set) rotationalVelocityDelta: ScalarSignal
```

Specifies the absolute delta value for the `rotationalVelocity` property. The rotation velocity is randomized uniformly in the range `[rotationalVelocity - rotationalVelocityDelta; rotationalVelocity + rotationalVelocityDelta]` for each particle.
*/ 
rotationalVelocityDelta: ScalarSignal;
/** 
* 
```
(get) types: ParticleTypeDescriptions
(set) (Not Available)
```

Retrieves the ParticleTypeDescriptions

*/ 
types: ParticleTypeDescriptions;
/** 
* ```
(get) angularVelocityDelta: PointSignal
(set) angularVelocityDelta: PointSignal
```

Specifies the absolute delta value for the `angularVelocity` property. The angular velocity is randomized uniformly in the range `[angularVelocity - angularVelocityDelta; angularVelocity + angularVelocityDelta]` for each particle.
*/ 
angularVelocityDelta: PointSignal;
/** 
* ```
(get) particleRotationDelta: PointSignal
(set) particleRotationDelta: PointSignal
```

Specifies the absolute delta value for the `particleRotation` property. The particle rotation is randomized uniformly in the range `[particleRotation - particleRotationDelta; particleRotation + particleRotationDelta]` for each particle.
*/ 
particleRotationDelta: PointSignal;
/** 
* ```
(get) (Not Available)
(set) positionModifier: ArrayOfScalarSamplers
```

Specifies the modifier that will be added to the particle position according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.

**Note**: the specified array of samplers must contain exactly 3 elements, interpreted as X,Y,Z values.
*/ 
positionModifier: ArrayOfScalarSamplers;
/** 
* ```
(get) rotationalVelocity: ScalarSignal
(set) rotationalVelocity: ScalarSignal
```

Specifies the mean rotational velocity of each particle, in radians-per-second.
*/ 
rotationalVelocity: ScalarSignal;
/** 
* ```
(get) lifetimeSeconds: ScalarSignal
(set) lifetimeSeconds: ScalarSignal
```

Specifies the mean lifetime of each particle, in seconds.
*/ 
lifetimeSeconds: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) colorModulationHSVA: HsvaSignal
```

Specifies the mean color for modulating the particle material.

**Note**: `colorModulationHSVA` can only be an instance of `HsvaSignal`, it cannot be specified in other color space like RGBA.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/ 
colorModulationHSVA: HsvaSignal;
/** 
* ```
(get) rotationalDampingPercentageDelta: ScalarSignal
(set) rotationalDampingPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `rotationalDamping` property. The rotational dumping is randomized uniformly in the range `[rotationalDamping * (1 - d); rotationalDamping * (1 + d)]` for each particle.

**Note**: The behavior is undefined for values outside the valid range.
*/ 
rotationalDampingPercentageDelta: ScalarSignal;
/** 
* ```
(get) material: MaterialBase
(set) material: MaterialBase
```

Specifies the material of the scene object.
*/ 
material: MaterialBase;
/** 
* ```
(get) (Not Available)
(set) sizeModifier: ScalarSampler
```

Specifies the modifier that will be added to the particle size according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.
*/ 
sizeModifier: ScalarSampler;
/** 
* ```
(get) (Not Available)
(set) velocityModifier: ArrayOfScalarSamplers
```

Specifies the modifier that will be added to the particle velocity according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.

**Note**: the specified array of samplers must contain exactly 3 elements, interpreted as X,Y,Z values.
*/ 
velocityModifier: ArrayOfScalarSamplers;
/** 
* ```
(get) outerRadius: ScalarValue
(set) outerRadius: ScalarSignal
```

Specifies the radius of the outer circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.

**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/ 
outerRadius: ScalarValue;
/** 
* ```
(get) worldSpace: BoolSignal
(set) worldSpace: BoolSignal
```

Specifies whether the particles will move with the emitter or will have their own position after being emitted.
*/ 
worldSpace: BoolSignal;
/** 
* ```
(get) (Not Available)
(set) position: PointSignal
```

Specifies the mean spawn position of each particle.
*/ 
position: PointSignal;
} 
