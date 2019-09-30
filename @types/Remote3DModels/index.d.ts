/// <reference path="../url/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
declare namespace Remote3DModelsModule {
/** 
*  
 *   fetch(url: url): EventSource
 *    
 *   Returns a EventSource for the result of the call. A `then(onSuccess(identifier), onFailure(reason))`.
 */function fetch(url: url): EventSource
 ;

} 
export = Remote3DModelsModule;