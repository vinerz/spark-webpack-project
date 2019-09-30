/// <reference path="../ScalarSignal/index.d.ts" />
declare interface SubTexture {
/** 
* ```
(get) minU: ScalarSignal
(set) minU: ScalarSignal
```

Specifies the position of the left boundary in UV texture coordinates.
*/ 
minU: ScalarSignal;
/** 
* ```
(get) minV: ScalarSignal
(set) minV: ScalarSignal
```

Specifies the position of the bottom boundary in UV texture coordinates.
*/ 
minV: ScalarSignal;
/** 
* ```
(get) sizeU: ScalarSignal
(set) sizeU: ScalarSignal
```

Specifies the horizontal span in UV texture coordinates.
*/ 
sizeU: ScalarSignal;
/** 
* ```
(get) sizeV: ScalarSignal
(set) sizeV: ScalarSignal
```

Specifies the vertical span in UV texture coordinates.
*/ 
sizeV: ScalarSignal;
} 
