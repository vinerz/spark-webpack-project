/// <reference path="../string/index.d.ts" />
/// <reference path="../TextureBase/index.d.ts" />
declare namespace TexturesModule {
/** 
*  
 * get(textureName: string): TextureBase
 *  
 * 
 * Returns a texture object, derived from `TextureBase`, that is specified by `textureName`. An exception is thrown when the texture isn't found in the project. Possible types are:
 * 
 *   * `CanvasTexture`
 *   * `ColorTexture`
 *   * `DeepLinkTexture`
 *   * `ExternalTexture`
 *   * `ImageTexture`
 *   * `SequenceTexture`
 * 
 * **See Also**: `TextureBase.name`.
 */function get(textureName: string): TextureBase
 ;

} 
export = TexturesModule;