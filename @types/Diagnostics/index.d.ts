/// <reference path="../Object/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../String/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../Array/index.d.ts" />
declare namespace DiagnosticsModule {
/** 
*  
 *   log(content: Object): void
 *    
 * 
 *   Flattens content to a string and prints it to the debug console.
 *   Note: this function can be reassigned to any var (i.e. `foo.log = Diagnostics.log;`)
 */function log(content: Object): void
 ;

/** 
*  
 *   watch(tag: String, signal:BoolSignal): void
 *   watch(tag: String, signal:ScalarSignal): void
 *   watch(tag: String, signal:StringSignal): void
 *    
 * 
 *   Adds the specified signal to the watch view in AR Studio with the specified tag.
 */function watch(tag: String, signal:BoolSignal): void
 ;

function watch(tag: String, signal:ScalarSignal): void
 ;

function watch(tag: String, signal:StringSignal): void
 ;

/** 
*  
 *   getModuleNames(): Array<string>
 *    
 * 
 *   Returns an array of names of all the scripting modules that can be loaded through a `require` call.
 *   Note: This set of modules is based on the list of enabled capabilities.
 */function getModuleNames(): Array<string>
 ;

/** 
*  
 *   getTypeDescriptions(): Array<string>
 *    
 * 
 *   Finds the descriptions for each type in the effect.
 */function getTypeDescriptions(): Array<string>
 ;

} 
export = DiagnosticsModule;