/// <reference path="../SceneObjectBase/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
declare namespace TouchGesturesModule {
/** 
*  
 *  onTap(): EventSource
 *  onTap(object: SceneObjectBase): EventSource
 *  onTap(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean, supportSkeleton?: boolean, supportParticles?: boolean, supportTransparentTexture?: boolean }): EventSource
 *   
 * 
 *  Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a [`TapGesture`](/docs/camera-effects/reference/touchgestures_module/tapgesture_class) object for each tap interaction.
 * 
 *  When `object` is specified, only events for the specified object are emitted.
 */function onTap(): EventSource
 ;

function onTap(object: any): EventSource
 ;

function onTap(options: {object?: any, normalizeCoordinates?: boolean, supportSkeleton?: boolean, supportParticles?: boolean, supportTransparentTexture?: boolean }): EventSource
 ;

/** 
*  
 * onRotate(): EventSource
 * onRotate(object: SceneObjectBase): EventSource
 * onRotate(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a [`RotateGesture`](/docs/camera-effects/reference/touchgestures_module/rotategesture_class) object for each rotate interaction.
 * 
 * When `object` is specified, only events for the specified object are emitted.
 */function onRotate(): EventSource
 ;

function onRotate(object: any): EventSource
 ;

function onRotate(options: {object?: any, normalizeCoordinates?: boolean}): EventSource
 ;

/** 
*  
 * onPan(): EventSource
 * onPan(object: SceneObjectBase): EventSource
 * onPan(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a [`PanGesture`](/docs/camera-effects/reference/touchgestures_module/pangesture_class) object for each pan interaction.
 * 
 * When `object` is specified, only events for the specified object are emitted.
 */function onPan(): EventSource
 ;

function onPan(object: any): EventSource
 ;

function onPan(options: {object?: any, normalizeCoordinates?: boolean}): EventSource
 ;

/** 
*  
 * onPinch(): EventSource
 * onPinch(object: SceneObjectBase): EventSource
 * onPinch(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a [`PinchGesture`](/docs/camera-effects/reference/touchgestures_module/pinchgesture_class) object for each pinch interaction.
 * 
 * When `object` is specified, only events for the specified object are emitted.
 */function onPinch(): EventSource
 ;

function onPinch(object: any): EventSource
 ;

function onPinch(options: {object?: any, normalizeCoordinates?: boolean}): EventSource
 ;

/** 
*  
 * onLongPress(): EventSource
 * onLongPress(object: SceneObjectBase): EventSource
 * onLongPress(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a [`LongPressGesture`](/docs/camera-effects/reference/touchgestures_module/longpressgesture_class) object for each long-press interaction.
 * 
 * When `object` is specified, only events for the specified object are emitted.
 */function onLongPress(): EventSource
 ;

function onLongPress(object: any): EventSource
 ;

function onLongPress(options: {object?: any, normalizeCoordinates?: boolean}): EventSource
 ;

/** 
*  
 * onRawTouch(): EventSource
 * onRawTouch(object: SceneObjectBase): EventSource
 * onRawTouch(options: {object?: SceneObjectBase, normalizeCoordinates?: boolean}): EventSource
 *  
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe, that emits a `RawTouch` object for each touch interaction.
 * 
 * If `object` is specified, then the events are only emitted if the specific object was touched. Otherwise, events are emitted for touches anywhere on the screen.
 */function onRawTouch(): EventSource
 ;

function onRawTouch(object: any): EventSource
 ;

function onRawTouch(options: {object?: any, normalizeCoordinates?: boolean}): EventSource
 ;

} 
export = TouchGesturesModule;