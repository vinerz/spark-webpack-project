/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../Speaker/index.d.ts" />
/// <reference path="../AudioSource/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface Speaker {
/** 
* ```
(get) volume: ScalarValue
(set) volume: ScalarSignal
```

(get) Returns the volume of the speaker in the range of [0.0, 1.0].
(set) Specifies the volume of the speaker in the range of [0.0, 1.0].

Note: To access this property you need to enable the AudioSourceVolume API capability.
*/ 
volume: ScalarValue;
/** 
*  
 * play(): void
 *  
 * 
 * Creates a new playing instance of the sound associated with this AudioSource.
 */play(): void
 ;

/** 
*  
 * stopAll(speaker: Speaker): void
 *  
 * 
 * Stops all playing instances of this AudioSource.
 */stopAll(speaker: Speaker): void
 ;

/** 
*  
 * isPlaying(audioSource: AudioSource): BoolSignal
 *  
 * 
 * Returns a `BooleanSignal` indicating whether the specified audio source is playing.
 */isPlaying(audioSource: AudioSource): BoolSignal
 ;

/** 
*  
 * minProgress(audioSource: AudioSource): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` indicating the timestamp of the played audio source instance with lowest timestamp. A value of zero is returned if the audio source is not currently playing.
 */minProgress(audioSource: AudioSource): ScalarSignal
 ;

} 
