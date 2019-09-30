/// <reference path="../MaterialBase/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../FontId/index.d.ts" />
/// <reference path="../?number/index.d.ts" />
/// <reference path="../boolean/index.d.ts" />
/// <reference path="../TextAlignmentWrapper/index.d.ts" />
declare interface PlanarText {
/** 
* ```
(get) (Not Available)
(set) material: MaterialBase
```

Specifies the material of the scene object.
*/ 
material: MaterialBase;
/** 
* ```
(get) text: StringSignal
(set) text: StringSignal
```

Specifies the text displayed.
*/ 
text: StringSignal;
/** 
* ```
(get) (Not Available)
(set) fontSize: number
```

Specifies the font size of the text.
*/ 
fontSize: number;
/** 
* ```
(get) (Not Available)
(set) font: FontId
```

Sets the given font from the fonts registry.
*/ 
font: FontId;
/** 
* ```
(get) (Not Available)
(set) leading: ?number
```

Specifies the line spacing. This is the distance between the baselines in the text. If unspecified, spacing defaults to the font size.
*/ 
leading? : number;
/** 
* ```
(get) (Not Available)
(set) scaleToFit: boolean
```

Specifies if the text is scaled to fit the container.
*/ 
scaleToFit: boolean;
/** 
* ```
(get) (Not Available)
(set) maxLines: ?number
```

Specifies the maximum number of lines for the text. If unspecified, the number of lines is unrestricted.
*/ 
maxLines? : number;
/** 
* ```
(get) (Not Available)
(set) tracking: number
```

Specifies the text spacing. This is the additional distance between letters. Default is zero. Can be negative.
*/ 
tracking: number;
/** 
* ```
(get) alignment: TextAlignmentWrapper
(set) (Not Available)
```

Represents the `TextAlignmentWrapper` that contains parameters that specify the text alignment.
*/ 
alignment: TextAlignmentWrapper;
} 
