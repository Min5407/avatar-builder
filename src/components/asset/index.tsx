import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Skeleton } from 'three';

type Props = {
  url: string;
  skeleton: Skeleton;
};
const Asset = ({ url, skeleton }: Props) => {
  // const { scene } = useGLTF(url);

  // const attatchedItems = useMemo(() => {
  //   const items: any = [];
  //   scene.traverse((child: any) => {
  //     if (child.isMesh) {
  //       items.push({ geometry: child.geometry, material: child.material });
  //     }
  //   });
  //   return items;
  // }, []);
  const { scene } = useGLTF('models/assets/Shoes.001.glb');

  const attatchedItems = useMemo(() => {
    const items: any = [];
    scene.traverse((child: any) => {
      console.log('##', 123);

      if (child.isMesh) {
        items.push({ geometry: child.geometry, material: child.material });
      }
    });
    return items;
  }, []);
  console.log('##', 123);

  return <>ss</>;
};

export default Asset;
