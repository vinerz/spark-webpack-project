/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface Slider {
/** 
* ```
                                    (set) visible: BoolSignal
                                    ```
                                    Will instruct slider to be visible or not visible, according to passed boolean value.
*/ 
visible: BoolSignal;
/** 
* ```
                                    (get) value: ScalarSignal
                                    (set) value: ScalarSignal
                                    ```
                                    Will instruct slider to change its value.
*/ 
value: ScalarSignal;
} 
