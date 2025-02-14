import { ObjectValuesType } from '../../utils/type';

export const ASSET_CATEGORY_TYPE = {
  HEAD: 'Head',
  HAIR: 'Hair',
  FACE: 'Face',
  EYES: 'Eyes',
  EYEBROWS: 'Eyebrows',
  NOSE: 'Nose',
  FACIAL_HAIR: 'Facial Hair',
  GLASSES: 'Glasses',
  HAT: 'Hat',
  TOP: 'Top',
  BOTTOM: 'Bottom',
  SHOE: 'Shoe',
  ACCESSORIES: 'Accessories',
} as const;

export type AssetCategoryType = ObjectValuesType<typeof ASSET_CATEGORY_TYPE>;
export type CustomizationCategoryType = {
  position: number;
  categoryType: AssetCategoryType;
};

export const customizationCategoryData = [
  {
    categoryType: 'Head',
    position: 1,
  },
  {
    categoryType: 'Hair',
    position: 2,
  },
  {
    categoryType: 'Face',
    position: 3,
  },
  {
    categoryType: 'Eyes',
    position: 4,
  },
  {
    categoryType: 'Eyebrows',
    position: 5,
  },
  {
    categoryType: 'Nose',
    position: 6,
  },
  {
    categoryType: 'Facial Hair',
    position: 7,
  },
  {
    categoryType: 'Glasses',
    position: 8,
  },
  {
    categoryType: 'Hat',
    position: 9,
  },
  {
    categoryType: 'Top',
    position: 10,
  },
  {
    categoryType: 'Bottom',
    position: 11,
  },
  {
    categoryType: 'Shoe',
    position: 12,
  },
  {
    categoryType: 'Accessories',
    position: 13,
  },
] satisfies CustomizationCategoryType[];
