/// <reference path="../Scene.RenderMode/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../Bounds2D/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface Canvas {
/** 
* ```
(get) renderMode: SceneModule.RenderMode
(set) renderMode: SceneModule.RenderMode
```

Specifies how Canvas should be rendered.
In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
*/ 
renderMode: RenderMode;
/** 
* ```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
**Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
*/ 
width: ScalarSignal;
/** 
* ```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
**Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
*/ 
height: ScalarSignal;
/** 
* 
```
(get) bounds: Bounds2D
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.

**Note**: The `Canvas.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
        
*/ 
bounds: Bounds2D;
/** 
* ```
(get) useSafeAreaMargins: BoolSignal
(set) useSafeAreaMargins: BoolSignal
```

Specifies if Canvas should automatically include SafeArea margin to its content.
**Note:** this is only effective when `renderMode` property is set to SCREEN_SPACE.
*/ 
useSafeAreaMargins: BoolSignal;
} 
