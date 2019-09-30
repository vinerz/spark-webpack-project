/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
declare interface Hand {
/** 
* ```
                       (get) cameraTransform: TransformSignal
                       (set) (Not Available)
                       ```

                       Specifies the hand transformation relative to camera coordinate system.
*/ 
cameraTransform: TransformSignal;
/** 
* ```
                                (get) middleFingerPromixal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the proximal joint of the middle finger.
*/ 
middleFingerProximal: PointSignal;
/** 
* ```
                       (get) indexFingerTip: PointSignal
                       (set) (Not Available)
                       ```

                       Specifies the 3D position of the tip of the index finger.
*/ 
indexFingerTip: PointSignal;
/** 
* ```
                                            (get) ringFingerRightSide: PointSignal
                                            (set) (Not Available)
                                            ```

                                            Specifies the 3D position of the right side of the ring finger.
*/ 
ringFingerRightSide: PointSignal;
/** 
* ```
                       (get) wrist: PointSignal
                       (set) (Not Available)
                       ```

                       Specifies the 3D position of the wrist center point of the hand.
*/ 
wrist: PointSignal;
/** 
* ```
                       (get) indexFingerBase: PointSignal
                       (set) (Not Available)
                       ```

                       Specifies the 3D position of the base of the index finger.
*/ 
indexFingerBase: PointSignal;
/** 
* ```
                       (get) indexFingerPromixal: PointSignal
                       (set) (Not Available)
                       ```

                       Specifies the 3D position of the proximal joint of the index finger.
*/ 
indexFingerProximal: PointSignal;
/** 
* ```
                                (get) littleFingerDistal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the distal joint of the little finger.
*/ 
littleFingerDistal: PointSignal;
/** 
* ```
                       (get) indexFingerDistal: PointSignal
                       (set) (Not Available)
                       ```

                       Specifies the 3D position of the distal joint of the index finger.
*/ 
indexFingerDistal: PointSignal;
/** 
* ```
                                (get) ringFingerPromixal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the proximal joint of the ring finger.
*/ 
ringFingerProximal: PointSignal;
/** 
* ```
                                (get) middleFingerBase: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the base of the middle finger.
*/ 
middleFingerBase: PointSignal;
/** 
* ```
                                (get) littleFingerBase: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the base of the little finger.
*/ 
littleFingerBase: PointSignal;
/** 
* ```
                                (get) middleFingerDistal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the distal joint of the middle finger.
*/ 
middleFingerDistal: PointSignal;
/** 
* ```
                                (get) ringFingerTip: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the tip of the ring finger.
*/ 
ringFingerTip: PointSignal;
/** 
* ```
                                (get) middleFingerTip: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the tip of the middle finger.
*/ 
middleFingerTip: PointSignal;
/** 
* ```
                                (get) ringFingerDistal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the distal joint of the ring finger.
*/ 
ringFingerDistal: PointSignal;
/** 
* ```
                                (get) ringFingerBase: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the base of the ring finger.
*/ 
ringFingerBase: PointSignal;
/** 
* ```
                                (get) littleFingerTip: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the tip of the little finger.
*/ 
littleFingerTip: PointSignal;
/** 
* ```
                                (get) littleFingerPromixal: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the proximal joint of the little finger.
*/ 
littleFingerProximal: PointSignal;
/** 
* ```
                                (get) thumbTip: PointSignal
                                (set) (Not Available)
                                ```

                                Specifies the 3D position of the tip of the thumb finger.
*/ 
thumbTip: PointSignal;
/** 
* ```
                                            (get) leftRingFingerWidthPoint: PointSignal
                                            (set) (Not Available)
                                            ```

                                            Specifies the 3D position of the left side of the ring finger.
*/ 
ringFingerLeftSide: PointSignal;
/** 
* ```
                       (get) gestureType: StringSignal
                       (set) (Not Available)
                       ```

                       Specifies a `StringSignal` containing the name of the hand gesture.
*/ 
gestureType: StringSignal;
} 
