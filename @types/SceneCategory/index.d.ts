/// <reference path="../BoolSignal/index.d.ts" />
declare interface SceneCategory {
/** 
* ```
                        (get) found: BoolSignal
                        ```
                        Specifies a `BoolSignal` that takes the value of `true` whenever the scene captured by the camera is that category, `false` otherwise. Default value is 'false'.
*/ 
found: BoolSignal;
} 
