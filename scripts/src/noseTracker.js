import FaceTracking from 'FaceTracking';

const { nose, cameraTransform } = FaceTracking.face(0);
export const noseTip = cameraTransform.applyTo(nose.tip);
