/// <reference path="../StringValue/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
declare interface ExternalTexture {
/** 
* ```
(get) url: StringValue
(set) url: StringSignal
```

Specifies the URL of the texture to be downloaded.
*/ 
url: StringValue;
/** 
* ```
(get) state: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` representing the loading state of the external texture. The value of the signal is guaranteed to be a member of the `TexturesModule.ExternalTexture.State` enumeration.
*/ 
state: StringSignal;
} 
