/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface ColorPaintMaterial {
/** 
* ```
(get) paintBrightness: ScalarValue
(set) paintBrightness: ScalarSignal
```

Specifies the simulated paint brightness.
*/ 
paintBrightness: ScalarValue;
/** 
* ```
(get) backgroundInfluence: ScalarSignal
(set) backgroundInfluence: ScalarSignal
```

Specifies the influence of the background face on the paint texture.
*/ 
backgroundInfluence: ScalarSignal;
} 
