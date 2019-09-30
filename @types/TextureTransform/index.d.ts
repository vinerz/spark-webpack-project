/// <reference path="../ScalarSignal/index.d.ts" />
declare interface TextureTransform {
/** 
* ```
(get) offsetU: ScalarSignal
(set) offsetU: ScalarSignal
```

Specifies the offset along the U-axis of the texture coordinates system.
*/ 
offsetU: ScalarSignal;
/** 
* ```
(get) offsetV: ScalarSignal
(set) offsetV: ScalarSignal
```

Specifies the offset along the V-axis of the texture coordinates system.
*/ 
offsetV: ScalarSignal;
/** 
* ```
(get) rotation: ScalarSignal
(set) rotation: ScalarSignal
```

Specifies the rotation of the texture coordinates system in radians.
*/ 
rotation: ScalarSignal;
/** 
* ```
(get) scaleU: ScalarSignal
(set) scaleU: ScalarSignal
```

Specifies the scale along the U-axis of the texture coordinates system.
*/ 
scaleU: ScalarSignal;
/** 
* ```
(get) scaleV: ScalarSignal
(set) scaleV: ScalarSignal
```

Specifies the scale along the V-axis of the texture coordinates system.
*/ 
scaleV: ScalarSignal;
} 
