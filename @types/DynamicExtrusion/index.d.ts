/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../Scene.BrushType/index.d.ts" />
/// <reference path="../MaterialBase/index.d.ts" />
declare interface DynamicExtrusion {
/** 
* ```
(get) defaultBrushSize: ScalarSignal
(set) defaultBrushSize: ScalarSignal
```

Specifies the default size of a side of brush for Dynamic Extrusion.

This value will be used in the newly created strokes if brushSize isn't given explicitly in createStroke method.
*/ 
defaultBrushSize: ScalarSignal;
/** 
* ```
(get) defaultBrushType: SceneModule.BrushType
(set) defaultBrushType: SceneModul.BrushType
```

Specifies default type of brush should the Dynamic Extrusion be drawn with.

This value will be used in the newly created strokes if brushType isn't given explicitly in createStroke method.
*/ 
defaultBrushType: BrushType;
/** 
* ```
(get) defaultBrushDistance: ScalarSignal
(set) defaultBrushDistance: ScalarSignal
```

Specifies how many internal points should be sampled between each 2 consecutive points when drawing the curve with given points. The more points there will be, the more accurate the curve will look.

This value will be used in the newly created strokes if brushDistance isn't given explicitly in createStroke method.
*/ 
defaultBrushDistance: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) defaultMaterial: MaterialBase
```

Specifies the defaultMaterial of the scene object.

This value will be used in the newly created strokes if material isn't given explicitly in createStroke method.
*/ 
defaultMaterial: MaterialBase;
/** 
* ```
(get) textureWidthSize: ScalarSignal
(set) textureWidthSize: ScalarSignal
```

Specifies the width to map texture on the tube. The default value is 10 mm, so the given texture will repeat itself in every 10 mm on the tube.

This value will be used in the newly created strokes if textureWidthSize isn't given explicitly in createStroke method.
*/ 
defaultTextureWidthSize: ScalarSignal;
/** 
*  
 * createStroke(config: {location: PointSignal, completionEvent: EventSource, brushSize: ?number, brushType: ?SceneModule.DynamicExtrusion.BrushType, brushDistance: ?number, textureWidthSize: ?number, textureHeightStep: ?number, material: ?MaterialBase, extrudeInCPU: ?boolean})
 *  
 * 
 * This method is used to add points to the Dynamic Extrusion through a signal for 3d points in World Space in current units for continuous updating. You can customize the properties for each stroke.
 * The default values for the properties are brushSize: 10 mm, brushType: Scene.DynamicExtrusion.BrushType.QUAD, brushDistance: 20 mm, textureWidthSize: 10 mm, textureHeightStep: 1 / noOfBrushFaces, extrudeInCPU: true
 * 
 *  
 * var Scene = require('Scene');
 * var TouchGestures = require('TouchGestures');
 * TouchGestures.onPan().subscribe(function(gesture) {
 *    var worldSpacePointSignal = Scene.unproject({location: gesture.location});
 *    endedEvent = gesture.state.eq(TouchGestures.Gesture.State.ENDED).onOn();
 *    dynamicExtrusion.createStroke({location: worldSpacePointSignal, completionEvent: endedEvent});
 * });
 *  
 */createStroke(config: {location: PointSignal, completionEvent: EventSource, brushSize: ?number, brushType: ?SceneModule.DynamicExtrusion.BrushType, brushDistance: ?number, textureWidthSize: ?number, textureHeightStep: ?number, material: ?MaterialBase, extrudeInCPU: ?boolean})
 ;

/** 
*  
 * clear()
 *  
 * This method is used to clear all stroke. Cannot be called before the last stroke has ended. Doesn't do anything if there are no strokes.
 *  
 */clear()
 ;

/** 
*  
 * undo()
 *  
 * This method is used to undo the last stroke. Cannot be called before the last stroke has ended. Doesn't do anything if there are no strokes.
 *  
 */undo()
 ;

} 
