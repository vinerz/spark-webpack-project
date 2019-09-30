/// <reference path="../BoolValue/index.d.ts" />
declare interface CameraVisibility {
/** 
* ```
(get) forUnspecifiedCamera: BoolValue
(set) forUnspecifiedCamera: BoolSignal
```

Specifies whether the object is visible when the active camera couldn't be specified.
*/ 
forUnspecifiedCamera: BoolValue;
/** 
* ```
(get) forFrontCamera: BoolValue
(set) forFrontCamera: BoolSignal
```

Specifies whether the object is visible when the front camera is the active one.
*/ 
forFrontCamera: BoolValue;
/** 
* ```
(get) forBackCamera: BoolValue
(set) forBackCamera: BoolSignal
```

Specifies whether the object is visible when the back camera is the active one.
*/ 
forBackCamera: BoolValue;
} 
