import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Dispatch, SetStateAction, Suspense } from 'react';
import Lights from '@/components/lights';
import * as THREE from 'three';

// @ts-expect-error this file is JSX
import IPhoneJSX from '@/components/iphoneJsx';
import Loader from '@/components/loader';

const ModelView = ({
  index,
  gsapType,
  groupRef,
  controlRef,
  setRotationState,
  item,
  size,
}: Props) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhoneJSX scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

interface Props {
  index: number;
  groupRef: any;
  gsapType: string;
  controlRef: any;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: any;
  size: string;
}

export default ModelView;
