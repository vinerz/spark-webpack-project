import R from 'Reactive';
import Scene from 'Scene';
import Diagnostics from 'Diagnostics';

import { noseTip } from './noseTracker';

const plane0 = Scene.root.find('plane0');

plane0.transform.x = noseTip.x;
plane0.transform.y = R.add(noseTip.y, 0.01);

Diagnostics.watch('noseTip.x', noseTip.x);
Diagnostics.watch('noseTip.y', noseTip.y);
Diagnostics.watch('noseTip.z', noseTip.z);
