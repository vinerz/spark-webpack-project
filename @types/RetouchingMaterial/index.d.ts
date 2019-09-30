/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface RetouchingMaterial {
/** 
* ```
(get) teethWhiteningFactor: ScalarSignal
(set) teethWhiteningFactor: ScalarSignal
```

Specifies the simulated teeth whitening factor.
*/ 
teethWhiteningFactor: ScalarSignal;
/** 
* ```
(get) eyeBrighteningFactor: ScalarSignal
(set) eyeBrighteningFactor: ScalarSignal
```

Specifies the simulated eye whitening factor.
*/ 
eyeBrighteningFactor: ScalarSignal;
/** 
* ```
(get) skinSmoothingFactor: ScalarSignal
(set) skinSmoothingFactor: ScalarSignal
```

Specifies the simulated skin smoothness factor.
*/ 
skinSmoothingFactor: ScalarSignal;
/** 
* ```
(get) fullScreen: BoolSignal
(set) fullScreen: BoolSignal
```

Specifies whether effect should be full-screen.
*/ 
fullScreen: BoolSignal;
} 
