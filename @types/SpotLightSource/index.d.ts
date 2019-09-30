/// <reference path="../ColorSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface SpotLightSource {
/** 
* ```
(get) (Not Available)
(set) color: ColorSignal
```

Specifies the color of this light source.
*/ 
color: ColorSignal;
/** 
* ```
(get) intensity: ScalarSignal
(set) intensity: ScalarSignal
```

Specifies the intensity of this light source, usually between 0.0 and 1.0.
*/ 
intensity: ScalarSignal;
/** 
* ```
(get) angleInner: ScalarSignal
(set) angleInner: ScalarSignal
```

Specifies the inner angle of the spotlight cone, everything inside is fully illuminated. In radians.
*/ 
angleInner: ScalarSignal;
/** 
* ```
(get) angleOuter: ScalarSignal
(set) angleOuter: ScalarSignal
```

Specifies the outer angle of the spotlight cone, everything outside is not illuminated. In radians.
*/ 
angleOuter: ScalarSignal;
} 
