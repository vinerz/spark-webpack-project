/// <reference path="../SceneObjectBase/index.d.ts" />
/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
declare namespace SceneModule {
/** 
* ```
(get) root: SceneObjectBase
(set) (Not Available)
```

Returns an object that is the root of the scene tree. Other objects are accessed by walking down the scene tree from the root using the `SceneObjectBase.child` and `SceneObjectBase.find` methods.
*/ 
const root: any;
/** 
*  
 * unprojectToFocalPlane(location: PixelPointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the PixelPointSignal.
 * The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
 * 
 * This function can be combined with TouchGestures to create a 3d point signal.
 *  
 * var S = require('Scene')
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   var signal = S.unprojectToFocalPlane(gesture.location);
 * });
 *  
 */function unprojectToFocalPlane(location: PixelPointSignal): PointSignal
 ;

/** 
*  
 * unprojectWithDepth(location: PixelPointSignal, depth: number): PointSignal
 *  
 * Returns a signal with the value that corresponds to the 3d point value (in World Space, in current units) of the given screenSpace point from the PixelPointSignal
 * The z coordinate of the PointSignal will always be equal to the given depth value. The depth should be given in current units.
 * 
 * This function can be combined with TouchGestures to create a 3d point signal.
 *  
 * var Scene = require('Scene')
 * var TouchGestures = require('TouchGestures')
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   var signal = Scene.unprojectWithDepth(gesture.location, 0.5);
 * });
 *  
 */function unprojectWithDepth(location: PixelPointSignal, depth: number): PointSignal
 ;

} 
export = SceneModule;