import { useGLTF } from '@react-three/drei';
import { ComponentProps, Suspense, useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import { useConfigurationStore } from '../../store/configuration';
import Asset from '../asset';

type Props = ComponentProps<'group'>;
const Avatar = (props: Props) => {
  const group = useRef<Group<Object3DEventMap>>(null);
  const { nodes } = useGLTF('models/Armature.glb');
  const { materials: headMaterals, nodes: headNodes } = useGLTF(
    'models/assets/Head.001.glb'
  );
  const { materials, nodes: shoeNodes } = useGLTF(
    'models/assets/Shoes.001.glb'
  );

  const customatization = useConfigurationStore(
    (state) => state.customizationAssets
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />

          <Asset url={''} skeleton={(nodes as any).Plane.Skeleton} />
          <skinnedMesh
            name='Head001_1'
            geometry={headNodes.Head001_1.geometry}
            material={headMaterals.Skin_}
            skeleton={headNodes.Head001_1.skeleton}
            morphTargetDictionary={headNodes.Head001_1.morphTargetDictionary}
            morphTargetInfluences={headNodes.Head001_1.morphTargetInfluences}
          />
          <skinnedMesh
            name='Head001_2'
            geometry={headNodes.Head001_2.geometry}
            material={headMaterals.InsideMouth}
            skeleton={headNodes.Head001_2.skeleton}
            morphTargetDictionary={headNodes.Head001_2.morphTargetDictionary}
            morphTargetInfluences={headNodes.Head001_2.morphTargetInfluences}
          />
          <skinnedMesh
            name='Head001_3'
            geometry={headNodes.Head001_3.geometry}
            material={headMaterals.Teeth}
            skeleton={headNodes.Head001_3.skeleton}
            morphTargetDictionary={headNodes.Head001_3.morphTargetDictionary}
            morphTargetInfluences={headNodes.Head001_3.morphTargetInfluences}
          />
          {/* <skinnedMesh
            geometry={shoeNodes.Cylinder002.geometry}
            material={materials.Color_}
            skeleton={shoeNodes.Cylinder002.skeleton}
          />
          <skinnedMesh
            geometry={shoeNodes.Cylinder002_1.geometry}
            material={materials['Shoes.001']}
            skeleton={shoeNodes.Cylinder002_1.skeleton}
          /> */}
          {/* {Object.keys(customatization).map((key: any) => {
            if ((customatization as any)[key]?.modelUrl) {
              return (
                <Suspense key={(customatization as any)[key].name}>
                  <Asset
                    url={(customatization as any)[key].modelUrl}
                    skeleton={(nodes as any).Plane.Skeleton}
                  />
                </Suspense>
              );
            }
          })} */}
        </group>
      </group>
    </group>
  );
};

export default Avatar;
