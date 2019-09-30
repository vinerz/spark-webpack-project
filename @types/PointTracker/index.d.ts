/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../Point2D/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface PointTracker {
/** 
* ```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns tracking confidence level info.
This value indicates if PointTracker is currently tracking and how confident it is in reported results.
Possible values:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/ 
confidence: StringSignal;
/** 
*  
 * trackPoint(screenLocation: Point2D): void
 * trackPoint(screenX: number, screenY: number): void
 * trackPoint(screenLocation: PixelPointSignal, gestureState: StringSignal): void
 *  
 * 
 * PointTracker origin is bound to a point in 3d space, located on detected point.
 * This method updates PointTracker to track 3d point currently under given screen coordiantes.
 * This also triggers new point detection, in result this object's transform will be modified.
 * 
 * Version with signal parameters can be used in touch gestures for continuous updating:
 * 
 *  
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   pointTracker.trackPoint(gesture.location, gesture.state);
 * });
 *  
 */trackPoint(screenLocation: Point2D): void
 ;

trackPoint(screenX: number, screenY: number): void
 ;

trackPoint(screenLocation: PixelPointSignal, gestureState: StringSignal): void
 ;

} 
