import { AssetCategoryType } from '../customization-groups';

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
    thumbnailUrl: 'models/assets/head.jpg',
    modelUrl: 'models/assets/Head.001.glb',
  },
];
