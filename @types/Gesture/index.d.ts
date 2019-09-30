/// <reference path="../Gesture.Type/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
declare interface Gesture {
/** 
* ```
(get) type: Gesture.Type
(set) (Not Available)
```

Specifies a [`Gesture.Type`](/docs/camera-effects/reference/type_enum) enum value representing the type of gesture detected.

To use this property, enable pre-release APIs in your project manifest.
*/ 
type: Type;
/** 
* ```
(get) state: StringSignal
(set) (Not Available)
```
Specifies a [`StringSignal`](/docs/camera-effects/reference/reactive_module/stringsignal_class) representing the current gesture state. The value is a member of the [`Gesture.State`](/docs/camera-effects/reference/gesture_state_enum) enum.
*/ 
state: StringSignal;
} 
