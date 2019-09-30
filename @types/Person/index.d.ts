/// <reference path="../BoundingBox/index.d.ts" />
/// <reference path="../number/index.d.ts" />
declare interface Person {
/** 
* 
```
(get) box: BoundingBox
```

Gets the pose bounding box of the given person.

*/ 
box: BoundingBox;
/** 
* 
```
(get) poseId: number
```

Gets the unique pose ID of the given person.

*/ 
poseId: number;
/** 
* 
```
(get): RightLeg
```

Gets the right leg component of this person.

*/ 
rightLeg: any;
/** 
* 
```
(get): Head
```

Gets the head component of this person.

*/ 
head: any;
/** 
* 
```
(get): LeftArm
```

Gets the left arm component of this person.

*/ 
leftArm: any;
/** 
* 
```
(get): RightArm
```

Gets the right arm component of this person.

*/ 
rightArm: any;
/** 
* 
```
(get): Torso
```

Gets the torso component of this person.

*/ 
torso: any;
/** 
* 
```
(get): LeftLeg
```

Gets the left leg component of this person.

*/ 
leftLeg: any;
} 
