/// <reference path="../Point2DSignal/index.d.ts" />
/// <reference path="../TextureSdf/index.d.ts" />
/// <reference path="../GenericMatrix/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../Point4DSignal/index.d.ts" />
/// <reference path="../Texture2d_1ch/index.d.ts" />
/// <reference path="../Texture2d_2ch/index.d.ts" />
/// <reference path="../Texture2d_3ch/index.d.ts" />
/// <reference path="../Texture2d_4ch/index.d.ts" />
/// <reference path="../GenericA/index.d.ts" />
/// <reference path="../GenericI/index.d.ts" />
/// <reference path="../GenericB/index.d.ts" />
/// <reference path="../Generic/index.d.ts" />
/// <reference path="../GenericFunction/index.d.ts" />
/// <reference path="../Matrix3/index.d.ts" />
/// <reference path="../GenericVector/index.d.ts" />
declare namespace ShadersModule {
/** 
*  
 * sdfRectangle(center: Point2DSignal, halfSize: Point2DSignal, config: {sdfVariant: Shaders.SdfVariant}): TextureSdf
 *  
 * 
 * Returns a signal for a rectangle SDF shape.
 */function sdfRectangle(center: Point2DSignal, halfSize: Point2DSignal, config: {sdfVariant: Shaders.SdfVariant}): TextureSdf
 ;

/** 
*  
 * vertexTransform(config: {[variableName: string]: Shaders.BuiltinUniform}): GenericMatrix
 *  
 * 
 * Returns a signal for the specified vertex transform depending on the BuiltinUniform used:
 * `BuiltinUniform.MVP_MATRIX`: `Matrix4`
 * `BuiltinUniform.MV_MATRIX`: `Matrix4`
 * `BuiltinUniform.M_MATRIX`: `Matrix4`
 * `BuiltinUniform.V_MATRIX`: `Matrix4`
 * `BuiltinUniform.P_MATRIX`: `Matrix4`
 * `BuiltinUniform.VP_MATRIX`: `Matrix4`
 * `BuiltinUniform.NORMAL_MATRIX`: `Matrix3`
 * `BuiltinUniform.INV_M_MATRIX`: `Matrix4`
 * `BuiltinUniform.INV_V_MATRIX`: `Matrix4`
 * `BuiltinUniform.INV_P_MATRIX`: `Matrix4`
 */function vertexTransform(config: {[variableName: string]: Shaders.BuiltinUniform}): GenericMatrix
 ;

/** 
*  
 * functionVec3(): (val: PointSignal) => PointSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 */function functionVec3(): (val: PointSignal) => PointSignal
 ;

/** 
*  
 * sdfRound(sdf: TextureSdf, radius: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape rounded by the specified radius.
 */function sdfRound(sdf: TextureSdf, radius: ScalarSignal): TextureSdf
 ;

/** 
*  
 * functionVec4(): (val: Point4DSignal) => Point4DSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 */function functionVec4(): (val: Point4DSignal) => Point4DSignal
 ;

/** 
*  
 * sdfMix(sdf1: TextureSdf, sdf2: TextureSdf, alpha: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the linear interpolation of the two given SDF shapes, modulated by alpha.
 */function sdfMix(sdf1: TextureSdf, sdf2: TextureSdf, alpha: ScalarSignal): TextureSdf
 ;

/** 
*  
 * gradient(config: {type: Shaders.GradientType}): Texture2d_1ch
 *  
 * 
 * Returns a signal for the specified gradient.
 */function gradient(config: {type: Shaders.GradientType}): Texture2d_1ch
 ;

/** 
*  
 * sdfHalfPlane(offset: Point2DSignal, normal: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal for a half-plane SDF shape.
 */function sdfHalfPlane(offset: Point2DSignal, normal: Point2DSignal): TextureSdf
 ;

/** 
*  
 * renderTargetSize(): Point2DSignal
 *  
 * 
 * Returns a signal of the current render target's size.
 */function renderTargetSize(): Point2DSignal
 ;

/** 
*  
 * sdfCircle(center: Point2DSignal, radius: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal for a circle SDF shape.
 */function sdfCircle(center: Point2DSignal, radius: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfRepeat(sdf: TextureSdf, pivot: Point2DSignal, size: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape's grid repetition.
 * The shape should be centered on the pivot and fit within the given size.
 */function sdfRepeat(sdf: TextureSdf, pivot: Point2DSignal, size: Point2DSignal): TextureSdf
 ;

/** 
*  
 * textureSampler(texture: Texture2d_1ch, uv: Point2DSignal): ScalarSignal
 * textureSampler(texture: Texture2d_2ch, uv: Point2DSignal): Point2DSignal
 * textureSampler(texture: Texture2d_3ch, uv: Point2DSignal): PointSignal
 * textureSampler(texture: Texture2d_4ch, uv: Point2DSignal): Point4DSignal
 *  
 * 
 * Samples the given texture at the specified uv coordinates.
 */function textureSampler(texture: Texture2d_1ch, uv: Point2DSignal): ScalarSignal
 ;

function textureSampler(texture: Texture2d_2ch, uv: Point2DSignal): Point2DSignal
 ;

function textureSampler(texture: Texture2d_3ch, uv: Point2DSignal): PointSignal
 ;

function textureSampler(texture: Texture2d_4ch, uv: Point2DSignal): Point4DSignal
 ;

/** 
*  
 * composition(f: (val: GenericA) => GenericB, g: (val: GenericI) => GenericA): (val: GenericI) => GenericB
 * composition(f: (val: GenericA) => GenericB, g: GenericA): GenericB
 *  
 * 
 * Returns a signal for the shader composition of the two given functions (e.g. texture and a transform).
 */function composition(f: (val: GenericA) => GenericB, g: (val: GenericI) => GenericA): (val: GenericI) => GenericB
 ;

function composition(f: (val: GenericA) => GenericB, g: GenericA): GenericB
 ;

/** 
*  
 * fallback(main: Generic, fallback: Generic): Generic
 * fallback(main: GenericFunction, fallback: GenericFunction): GenericFunction
 *  
 * 
 * Forwards the main input if present, otherwise uses fallback.
 */function fallback(main: Generic, fallback: Generic): Generic
 ;

function fallback(main: GenericFunction, fallback: GenericFunction): GenericFunction
 ;

/** 
*  
 * sdfComplement(sdf: TextureSdf): TextureSdf
 *  
 * 
 * Returns a signal of the complement of the given SDF shape.
 */function sdfComplement(sdf: TextureSdf): TextureSdf
 ;

/** 
*  
 * textureTransform(texture: Texture2d_1ch, transform: Matrix3): Texture2d_1ch
 * textureTransform(texture: Texture2d_2ch, transform: Matrix3): Texture2d_2ch
 * textureTransform(texture: Texture2d_3ch, transform: Matrix3): Texture2d_3ch
 * textureTransform(texture: Texture2d_4ch, transform: Matrix3): Texture2d_4ch
 *  
 * 
 * Transforms the given texture with the specified Mat3 transform.
 */function textureTransform(texture: Texture2d_1ch, transform: Matrix3): Texture2d_1ch
 ;

function textureTransform(texture: Texture2d_2ch, transform: Matrix3): Texture2d_2ch
 ;

function textureTransform(texture: Texture2d_3ch, transform: Matrix3): Texture2d_3ch
 ;

function textureTransform(texture: Texture2d_4ch, transform: Matrix3): Texture2d_4ch
 ;

/** 
*  
 * functionScalar(): (val: ScalarSignal) => ScalarSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 */function functionScalar(): (val: ScalarSignal) => ScalarSignal
 ;

/** 
*  
 * sdfStar(center: Point2DSignal, radius1: ScalarSignal, radius2: ScalarSignal, numSides: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal for a star SDF shape.
 */function sdfStar(center: Point2DSignal, radius1: ScalarSignal, radius2: ScalarSignal, numSides: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfEllipse(center: Point2DSignal, halfSize: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal for an ellipse SDF shape.
 */function sdfEllipse(center: Point2DSignal, halfSize: Point2DSignal): TextureSdf
 ;

/** 
*  
 * blend(src: PointSignal, dest: PointSignal, config: {mode: Shaders.BlendMode}): PointSignal
 * blend(src: PointSignal, dest: Point4DSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 * blend(src: Point4DSignal, dest: PointSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 * blend(src: Point4DSignal, dest: Point4DSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 *  
 * 
 * Blends two colors with the specified blending mode.
 * When a color is passed as PointSignal its alpha value is considered to be 1.
 * When both colors are passed as PointSignal (i.e. without the alpha channel), the result is also PointSignal.
 */function blend(src: PointSignal, dest: PointSignal, config: {mode: Shaders.BlendMode}): PointSignal
 ;

function blend(src: PointSignal, dest: Point4DSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 ;

function blend(src: Point4DSignal, dest: PointSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 ;

function blend(src: Point4DSignal, dest: Point4DSignal, config: {mode: Shaders.BlendMode}): Point4DSignal
 ;

/** 
*  
 * functionVec2(): (val: Point2DSignal) => Point2DSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 */function functionVec2(): (val: Point2DSignal) => Point2DSignal
 ;

/** 
*  
 * sdfUnion(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 *  
 * 
 * Returns a signal of the union of the two given SDF shapes.
 */function sdfUnion(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 ;

/** 
*  
 * sdfDifference(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 *  
 * 
 * Returns a signal of the difference of the two given SDF shapes.
 */function sdfDifference(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 ;

/** 
*  
 * sdfPolygon(center: Point2DSignal, radius: ScalarSignal, numSides: ScalarSignal, config: {sdfVariant: Shaders.SdfVariant}): TextureSdf
 *  
 * 
 * Returns a signal for a polygon SDF shape.
 */function sdfPolygon(center: Point2DSignal, radius: ScalarSignal, numSides: ScalarSignal, config: {sdfVariant: Shaders.SdfVariant}): TextureSdf
 ;

/** 
*  
 * sdfScale(sdf: TextureSdf, pivot: Point2DSignal, size: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape scaled around the given pivot by the given size.
 */function sdfScale(sdf: TextureSdf, pivot: Point2DSignal, size: Point2DSignal): TextureSdf
 ;

/** 
*  
 * sdfIntersection(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 *  
 * 
 * Returns a signal of the intersection of the two given SDF shapes.
 */function sdfIntersection(sdf1: TextureSdf, sdf2: TextureSdf): TextureSdf
 ;

/** 
*  
 * sdfAnnular(sdf: TextureSdf, width: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape made annular (ring-like) by the specified width.
 */function sdfAnnular(sdf: TextureSdf, width: ScalarSignal): TextureSdf
 ;

/** 
*  
 * vertexAttribute(config: {[variableName: string]: Shaders.VertexAttribute}): GenericVector
 *  
 * 
 * Returns a signal for the specified vertex attribute depending on the VertexAttribute used:
 * `VertexAttribute.POSITION`: `Point4DSignal`
 * `VertexAttribute.NORMAL`: `PointSignal`
 * `VertexAttribute.TANGENT`: `Point4DSignal`
 * `VertexAttribute.TEX_COORDS`: `Point2DSignal`
 * `VertexAttribute.COLOR`: `Point4DSignal`
 * `VertexAttribute.BASE_POSITION`: `Point4DSignal`
 */function vertexAttribute(config: {[variableName: string]: Shaders.VertexAttribute}): GenericVector
 ;

/** 
*  
 * sdfSmoothDifference(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the smooth difference of the two given SDF shapes, modulated by K.
 */function sdfSmoothDifference(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfFlip(sdf: TextureSdf, offset: Point2DSignal, normal: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape flipped around the plane given by the offset an normal.
 */function sdfFlip(sdf: TextureSdf, offset: Point2DSignal, normal: Point2DSignal): TextureSdf
 ;

/** 
*  
 * sdfTranslation(sdf: TextureSdf, offset: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape translated by the given offset.
 */function sdfTranslation(sdf: TextureSdf, offset: Point2DSignal): TextureSdf
 ;

/** 
*  
 * sdfRotation(sdf: TextureSdf, pivot: Point2DSignal, angle: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape rotated around the given pivot by the given angle.
 */function sdfRotation(sdf: TextureSdf, pivot: Point2DSignal, angle: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfLine(offset: Point2DSignal, normal: Point2DSignal, halfWidth: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal for a line SDF shape.
 */function sdfLine(offset: Point2DSignal, normal: Point2DSignal, halfWidth: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfShear(sdf: TextureSdf, pivot: Point2DSignal, shear: Point2DSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape scaled around the given pivot by the given shear amount.
 */function sdfShear(sdf: TextureSdf, pivot: Point2DSignal, shear: Point2DSignal): TextureSdf
 ;

/** 
*  
 * sdfSmoothUnion(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the smooth union of the two given SDF shapes, modulated by K.
 */function sdfSmoothUnion(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfSmoothIntersection(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the smooth intersection of the two given SDF shapes, modulated by K.
 */function sdfSmoothIntersection(sdf1: TextureSdf, sdf2: TextureSdf, K: ScalarSignal): TextureSdf
 ;

/** 
*  
 * sdfTwist(sdf: TextureSdf, pivot: Point2DSignal, twist: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape twisted around the pivot by the given amount.
 */function sdfTwist(sdf: TextureSdf, pivot: Point2DSignal, twist: ScalarSignal): TextureSdf
 ;

/** 
*  
 * derivative(val: GenericVector, config: {derivativeType: Shaders.DerivativeType}): GenericVector
 *  
 * 
 * Returns a signal for the specified shader derivative of the given signal.
 */function derivative(val: GenericVector, config: {derivativeType: Shaders.DerivativeType}): GenericVector
 ;

/** 
*  
 * sdfRotationalRepeat(sdf: TextureSdf, pivot: Point2DSignal, radius: ScalarSignal, numTimes: ScalarSignal): TextureSdf
 *  
 * 
 * Returns a signal of the given SDF shape's rotational repetition numTimes at the given radius.
 * The shape should be centered on the pivot and fit within the angular sector defined by numTimes at the given radius.
 */function sdfRotationalRepeat(sdf: TextureSdf, pivot: Point2DSignal, radius: ScalarSignal, numTimes: ScalarSignal): TextureSdf
 ;

/** 
*  
 * fragmentStage(val: Generic): Generic
 * fragmentStage(val: GenericFunction): GenericFunction
 *  
 * 
 * Places the subsequent computation on val to the fragment stage.
 */function fragmentStage(val: Generic): Generic
 ;

function fragmentStage(val: GenericFunction): GenericFunction
 ;

/** 
*  
 * colorSpaceConvert(color: PointSignal, config: {inColorSpace: Shaders.ColorSpace, outColorSpace: Shaders.ColorSpace}): PointSignal
 * colorSpaceConvert(color: Point4DSignal, config: {inColorSpace: Shaders.ColorSpace, outColorSpace: Shaders.ColorSpace}): Point4DSignal
 *  
 * 
 * Converts a color from the input color space to the output colorspace.
 */function colorSpaceConvert(color: PointSignal, config: {inColorSpace: Shaders.ColorSpace, outColorSpace: Shaders.ColorSpace}): PointSignal
 ;

function colorSpaceConvert(color: Point4DSignal, config: {inColorSpace: Shaders.ColorSpace, outColorSpace: Shaders.ColorSpace}): Point4DSignal
 ;

} 
export = ShadersModule;