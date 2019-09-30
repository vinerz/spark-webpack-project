/// <reference path="../RequestedEffect/index.d.ts" />
declare namespace EffectLinkingModule {
/** 
* 
*/ 
const onGoToEffectFailure: any;
/** 
*  
 * requestEffect(requestEffectParams: {effectID: string}): RequestedEffect
 *  
 * 
 * Requests the hosting environment to download an effect via it's ID.
 * effectID defines the ID of the effect being requested.
 * Returned RequestedEffect can be used to apply the effect, and subscribe to apply failure.
 */function requestEffect(requestEffectParams: {effectID: string}): RequestedEffect
 ;

} 
export = EffectLinkingModule;