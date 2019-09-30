/// <reference path="../String/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../RgbaSignal/index.d.ts" />
/// <reference path="../PixelPointSignal/index.d.ts" />
/// <reference path="../VectorSignal/index.d.ts" />
/// <reference path="../ColorSignal/index.d.ts" />
declare namespace PatchesModule {
/** 
*  
 * getBooleanValue(name: String): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that is exported with `name` from the Patch Editor.
 */function getBooleanValue(name: String): BoolSignal
 ;

/** 
*  
 * getStringValue(name: String): StringSignal
 *  
 * 
 * Returns a `StringSignal` that is exported with `name` from the Patch Editor.
 */function getStringValue(name: String): StringSignal
 ;

/** 
*  
 * getPulseValue(name: String): EventSource
 *  
 * 
 * Returns a pulse `EventSource` that wrapps a pulse that is exported with `name` from the Patch Editor.
 */function getPulseValue(name: String): EventSource
 ;

/** 
*  
 * getScalarValue(name: String): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` that is exported with `name` from the Patch Editor.
 */function getScalarValue(name: String): ScalarSignal
 ;

/** 
*  
 * getPointValue(name: String): PointSignal
 *  
 * 
 * Returns a `PointSignal` that is exported with `name` from the Patch Editor.
 */function getPointValue(name: String): PointSignal
 ;

/** 
*  
 * setBooleanValue(name: String, signal: BoolSignal): void
 *  
 * 
 * Sends a `BoolSignal` that is imported with `name` into the Patch Editor.
 */function setBooleanValue(name: String, signal: BoolSignal): void
 ;

/** 
*  
 * getColorValue(name: String): RgbaSignal
 *  
 * 
 * Returns a `RgbaSignal` that is exported with `name` from the Patch Editor.
 */function getColorValue(name: String): RgbaSignal
 ;

/** 
*  
 * getPoint2DValue(name: String): PixelPointSignal
 *  
 * 
 * Returns a `PixelPointSignal` that is exported with `name` from the Patch Editor.
 */function getPoint2DValue(name: String): PixelPointSignal
 ;

/** 
*  
 * setPoint2DValue(name: String, signal: PixelPointSignal): void
 *  
 * 
 * Sends a `PixelPointSignal` that is imported with `name` into the Patch Editor.
 */function setPoint2DValue(name: String, signal: PixelPointSignal): void
 ;

/** 
*  
 * setPulseValue(name: String, signal: EventSource): void
 *  
 * 
 * Sends an `EventSource` that is imported with `name` into the Patch Editor.
 * 
 * Note: The `Reactive.once()` method can be used to return an `EventSource` that emits an empty event as soon as possible.
 */function setPulseValue(name: String, signal: EventSource): void
 ;

/** 
*  
 * setScalarValue(name: String, signal: ScalarSignal): void
 *  
 * 
 * Sends a `ScalarSignal` that is imported with `name` into the Patch Editor.
 */function setScalarValue(name: String, signal: ScalarSignal): void
 ;

/** 
*  
 * getVectorValue(name: String): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` that is exported with `name` from the Patch Editor.
 */function getVectorValue(name: String): VectorSignal
 ;

/** 
*  
 * setVectorValue(name: String, signal: VectorSignal): void
 *  
 * 
 * Sends a `VectorSignal` that is imported with `name` into the Patch Editor.
 */function setVectorValue(name: String, signal: VectorSignal): void
 ;

/** 
*  
 * setStringValue(name: String, signal: StringSignal): void
 *  
 * 
 * Sends a `StringSignal` that is imported with `name` into the Patch Editor.
 */function setStringValue(name: String, signal: StringSignal): void
 ;

/** 
*  
 * setPointValue(name: String, signal: PointSignal): void
 *  
 * 
 * Sends a `PointSignal` that is imported with `name` into the Patch Editor.
 */function setPointValue(name: String, signal: PointSignal): void
 ;

/** 
*  
 * setColorValue(name: String, signal: ColorSignal): void
 *  
 * 
 * Sends a `ColorSignal` that is imported with `name` into the Patch Editor.
 */function setColorValue(name: String, signal: ColorSignal): void
 ;

} 
export = PatchesModule;