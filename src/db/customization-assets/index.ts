import { AssetCategoryType } from '../customization-groups';

import Top01Thumbnail from '../../assets/thumbnails/top_01.png';
import Top02Thumbnail from '../../assets/thumbnails/top_02.png';
import Top03Thumbnail from '../../assets/thumbnails/top_03.png';

export type CustomizationAssetsType = {
  assetType: AssetCategoryType;
  name: string;
  thumbnailUrl: string;
  modelUrl?: File;
};

export const customizationAssetsData: CustomizationAssetsType[] = [
  {
    assetType: 'Top',
    name: 'Top_01',
    thumbnailUrl: Top01Thumbnail,
    modelUrl: undefined,
  },
  {
    assetType: 'Top',
    name: 'Top_02',
    thumbnailUrl: Top02Thumbnail,
    modelUrl: undefined,
  },
  {
    assetType: 'Top',
    name: 'Top_03',
    thumbnailUrl: Top03Thumbnail,
    modelUrl: undefined,
  },
];
