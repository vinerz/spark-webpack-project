/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../Scene.TrackingMode/index.d.ts" />
/// <reference path="../Point2D/index.d.ts" />
/// <reference path="../Point3D/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../ImageTexture/index.d.ts" />
/// <reference path="../ExternalTexture/index.d.ts" />
declare interface PlaneTracker {
/** 
* ```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns tracking confidence level info.
This value indicates if PlaneTracker is currently tracking and how confident it is in reported results.
Possible values:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/ 
confidence: StringSignal;
/** 
* ```
 (get) trackingMode: SceneModule.TrackingMode
 (set) trackingMode: SceneModule.TrackingMode
 ```

 Specifies if this tracker object should track horizontal plane or moving object.
*/ 
trackingMode: TrackingMode;
/** 
*  
 * hitTest(screenLocation: Point2D): Point3D
 *  
 * 
 * Returns a point on tracked plane in local coordinates of PlaneTracker (in 3D units).
 * Returns null if tracked plane is not found at given screen point.
 */hitTest(screenLocation: Point2D): Point3D
 ;

/** 
*  
 * trackPoint(screenLocation: Point2D): void
 * trackPoint(screenX: number, screenY: number): void
 * trackPoint(screenLocation: PixelPointSignal, gestureState: StringSignal): void
 *  
 * 
 * PlaneTracker origin is bound to a point in 3d space, located on detected plane.
 * This method updates PlaneTracker to track 3d point currently under given screen coordiantes.
 * This also triggers new plane detection, in result this object's transform will be modified.
 * 
 * Version with signal parameters can be used in touch gestures for continuous updating:
 * 
 *  
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   planeTracker.trackPoint(gesture.location, gesture.state);
 * });
 *  
 */trackPoint(screenLocation: Point2D): void
 ;

trackPoint(screenX: number, screenY: number): void
 ;

trackPoint(screenLocation: PixelPointSignal, gestureState: StringSignal): void
 ;

/** 
*  
 * trackTexture(texture: ImageTexture): void
 * trackTexture(texture: ExternalTexture): void
 *  
 * 
 * This method updates PlaneTracker to track against a texture.
 * The center of the texture is the origin of the PlaneTracker.
 * 
 * For the ExternalTexture version of this function call, care should be taken to
 * ensure that the texture is in an 'Available' state, else the pending or
 * fallback textures may be used instead.
 *  
 */trackTexture(texture: ImageTexture): void
 ;

trackTexture(texture: ExternalTexture): void
 ;

} 
