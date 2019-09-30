/// <reference path="../string/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../Transform/index.d.ts" />
/// <reference path="../WorldTransform/index.d.ts" />
/// <reference path="../CameraVisibility/index.d.ts" />
/// <reference path="../OutputVisibility/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../BoundingBox/index.d.ts" />
/// <reference path="../SceneObjectBase/index.d.ts" />
declare interface SceneObjectBase {
/** 
* ```
(get) name: string
(set) (Not Available)
```

Specifies the scene object name. This is the unique identifier of the object within the list of its siblings (immediate child objects of the same parent object).

**Note**: the object name is specified in AR Studio UI during design time.

**Note**: the object name must only be unique withing the list of direct siblings. There can be more than object with the same name in the scene as soon as they have different parents.

**See Also**: `SceneObjectBase.child`, `SceneObjectBase.find`, `SceneModule.root`.
*/ 
name: string;
/** 
* ```
(get) boundingBoxVisible: BoolSignal
(set) (Not Available)
```

Represents whether or not the bounding box for the object is visible.
*/ 
boundingBoxVisible: BoolSignal;
/** 
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the scene object unique identifier. This value is specified internally in AR Studio.
*/ 
identifier: string;
/** 
* ```
(get) transform: Transform
(set) transform: TransformSignal
```

Represents the object transformation, in object's local coordinate system.
*/ 
transform: Transform;
/** 
* ```
(get) materialIdentifier: string
(set) (Not Available)
```

Specifies the unique material identifier assigned to scene object. This value is specified internally in AR Studio.
*/ 
materialIdentifier: string;
/** 
* ```
(get) hidden: BoolSignal
(set) hidden: BoolSignal
```

Specifies whether the scene object and its descendants are hidden.
*/ 
hidden: BoolSignal;
/** 
* ```
(get) worldTransform: WorldTransform
(set) worldTransform: TransformSignal
```

Specifies a `TransformSignal` object describing the object's transformation relative to world coordinate system.
World transform in not yet supported for Canvas and Legacy canvas. Accessing this property from such objects or any of their children is not allowed.
*/ 
worldTransform: WorldTransform;
/** 
* ```
(get) cameraVisibility: CameraVisibility
(set) (Not Available)
```

Represents the `CameraVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the active camera.
*/ 
cameraVisibility: CameraVisibility;
/** 
* ```
(get) outputVisibility: OutputVisibility
(set) (Not Available)
```

Represents the `OutputVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the output.
*/ 
outputVisibility: OutputVisibility;
/** 
* ```
(get) parentWorldTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the parent's transformation relative to world coordinate system.
*/ 
parentWorldTransform: TransformSignal;
/** 
* ```
 (get) boundingBox: BoundingBox
 (set) (Not Available)
 ```

Retrieves the object's bounding box
*/ 
boundingBox: BoundingBox;
/** 
*  
 * child(name: string): SceneObjectBase
 *  
 * 
 * Returns a child object by name. An exception is thrown if the object isn't found.
 * 
 * **See Also**: `SceneObjectBase.find`, `SceneModule.root`.
 */child(name: string): any
 ;

/** 
*  
 * find(name: string): SceneObjectBase
 *  
 * 
 * Returns a descendant object by name. An exception is thrown if the object isn't found or if more than one is found.
 * 
 * **Note**: object D is considered to be a descendant of object P if either D is a child of P or if such an object C which is a child of P exists that D is a descendant of C.
 * 
 * **See Also**: `SceneObjectBase.child`, `SceneModule.root`.
 */find(name: string): any
 ;

} 
