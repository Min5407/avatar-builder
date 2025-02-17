import { useGLTF } from '@react-three/drei';
import { ComponentProps, useRef } from 'react';
import { Group, Object3DEventMap } from 'three';

type Props = ComponentProps<'group'>;
const Avatar = (props: Props) => {
  const group = useRef<Group<Object3DEventMap>>(null);
  const { nodes } = useGLTF('models/Armature.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Avatar;
