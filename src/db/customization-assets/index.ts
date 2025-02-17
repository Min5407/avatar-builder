import { AssetCategoryType } from '../customization-groups';

import HeadThumbnail from '../../assets/head.jpg';
import Head001Model from '../../assets/Head.001.glb?url';

export type CustomizationAssetsType = {
  assetType: AssetCategoryType;
  name: string;
  thumbnailUrl: string;
  modelUrl: string;
};

export const customizationAssetsData: CustomizationAssetsType[] = [
  {
    assetType: 'Head',
    name: 'Head_01',
    thumbnailUrl: HeadThumbnail,
    modelUrl: Head001Model,
  },
];
