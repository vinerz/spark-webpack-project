/// <reference path="../LiveStreamingComments/index.d.ts" />
/// <reference path="../LiveStreamingReactions/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare namespace LiveStreamingModule {
/** 
* ```
(get) comments: LiveStreamingComments
(set) (Not Available)
```

Provides access to a `LiveStreamingComments` object that encapsulates data about the live stream's comments.
*/ 
const comments: LiveStreamingComments;
/** 
* ```
(get) reactions: LiveStreamingReactions
(set) (Not Available)
```

Provides access to a `LiveStreamingReactions` object that encapsulates data about the live stream's reactions.
*/ 
const reactions: LiveStreamingReactions;
/** 
* ```
 (get) state: LiveStreaming.State
 (set) (Not Available)
 ```

 Specifies a `LiveStreaming.State` enum value indicating the broadcast state.
*/ 
const state: State;
/** 
* ```
(get) concurrentViewerCount: ScalarSignal
(set) (Not Available)
```

 Provides access to a `ScalarSignal` that encapsulates the number of concurrent viewers of the live stream.
*/ 
const concurrentViewerCount: ScalarSignal;
} 
export = LiveStreamingModule;