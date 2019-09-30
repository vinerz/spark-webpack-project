/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../Scene.HorizontalAlignment/index.d.ts" />
/// <reference path="../Scene.VerticalAlignment/index.d.ts" />
/// <reference path="../Scene.ScalingOption/index.d.ts" />
/// <reference path="../Bounds2D/index.d.ts" />
declare interface PlanarObject {
/** 
* ```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the width of the object.

**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/ 
width: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) marginBottom: number
```

Specifies the size of the bottom margin.

**Note**: it behaves in a similar way to the `margin-bottom` CSS property.
*/ 
marginBottom: number;
/** 
* ```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the height of the object.

**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/ 
height: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) marginStart: number
```

Specifies the size of the left margin.

**Note**: it behaves in a similar way to the `margin-left` CSS property.
*/ 
marginStart: number;
/** 
* ```
(get) (Not Available)
(set) marginTop: number
```

Specifies the size of the top margin.

**Note**: it behaves in a similar way to the `margin-top` CSS property.
*/ 
marginTop: number;
/** 
* ```
(get) (Not Available)
(set) xOffset: number
```

Specifies the horizontal offset of the object.

**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/ 
xOffset: number;
/** 
* ```
(get) (Not Available)
(set) marginEnd: number
```

Specifies the size of the right margin.

**Note**: it behaves in a similar way to the `margin-right` CSS property.
*/ 
marginEnd: number;
/** 
* ```
(get) (Not Available)
(set) yOffset: number
```

Specifies the vertical offset of the object.

**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.


**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/ 
yOffset: number;
/** 
* ```
(get) (Not Available)
(set) horizontalAlignment: SceneModule.HorizontalAlignment
```

Specifies the horizontal alignment.
*/ 
horizontalAlignment: HorizontalAlignment;
/** 
* ```
(get) (Not Available)
(set) verticalAlignment: SceneModule.VerticalAlignment
```

Specifies the vertical alignment.
*/ 
verticalAlignment: VerticalAlignment;
/** 
* ```
(get) (Not Available)
(set) scalingOption: SceneModule.ScalingOption
```

Specifies the size adjustment relative to parent.
*/ 
scalingOption: ScalingOption;
/** 
* ```
(get) bounds: Bounds2D
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.

**Note**: The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/ 
bounds: Bounds2D;
} 
