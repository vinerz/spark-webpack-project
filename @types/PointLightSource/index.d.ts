/// <reference path="../ColorSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface PointLightSource {
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
} 
