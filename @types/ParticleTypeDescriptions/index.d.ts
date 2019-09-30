/// <reference path="../number/index.d.ts" />
/// <reference path="../ParticleTypeDescription/index.d.ts" />
declare interface ParticleTypeDescriptions {
/** 
* 
```
(get) count: number
(set) (Not Available)
```

Retrieves the number of existing Particle Type Descriptions.

*/ 
count: number;
/** 
*  
 * get(index: number): ParticleTypeDescription
 *  
 * 
 * Retrieves the particle type description at that index. The particle type descriptions specify which frames of the sprite sheet the particle should use. From scripting, the frames that the ParticleTypeDescription is using cannot be changed, but the user can change their percentages, i.e if there are 2 particle types, with percentages 0.5 each, the user can change from scripting to make one particle type more dense than the other by changing their fractions, for example to 0.3 and 0.7 respectively.
 */get(index: number): ParticleTypeDescription
 ;

} 
