/// <reference path="../string/index.d.ts" />
/// <reference path="../StringValue/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
declare interface Prefab {
/** 
* ```
(get) name: string
(set) (Not Available)
```

Specifies the unique prefab name. The prefab name can be retrieved from within mesh.

**See Also**: `PrefabsModule.get`.
*/ 
name: string;
/** 
* ```
(get) url: StringValue
(set) url: StringSignal
```

Specifies the URL of the prefab to be downloaded.
*/ 
url: StringValue;
/** 
* ```
(get) state: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` representing the loading state of the external prefab. The value of the signal is guaranteed to be a member of the `ReactivePrefabsModule.State` enumeration.
*/ 
state: StringSignal;
} 
