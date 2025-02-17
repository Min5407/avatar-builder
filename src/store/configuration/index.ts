import { create } from 'zustand';
import {
  AssetCategoryType,
  CustomizationCategoryType,
  customizationCategoryData,
} from '../../db/customization-groups';
import {
  CustomizationAssetsType,
  customizationAssetsData,
} from '../../db/customization-assets';

type ConfigurationState = {
  categories: CustomizationCategoryType[];
  currentCategory: CustomizationCategoryType;
  assets: CustomizationAssetsType[];
  customizationAssets: Record<
    AssetCategoryType,
    CustomizationAssetsType | undefined
  >;
};

type ConfigurationAction = {
  setCurrentCategory: (category: CustomizationCategoryType) => void;
  setCustomizationAssets: (
    category: AssetCategoryType,
    asset: CustomizationAssetsType
  ) => void;
};

const CONFIGURATION_INITIAL_STATE: ConfigurationState = {
  categories: customizationCategoryData,
  currentCategory: customizationCategoryData[0],
  assets: customizationAssetsData,
  customizationAssets: {
    'Facial Hair': undefined,
    Accessories: undefined,
    Bottom: undefined,
    Glasses: undefined,
    Hat: undefined,
    Nose: undefined,
    Face: undefined,
    Head: undefined,
    Top: undefined,
    Eyebrows: undefined,
    Eyes: undefined,
    Hair: undefined,
    Shoe: undefined,
  },
};

export const useConfigurationStore = create<
  ConfigurationState & { actions: ConfigurationAction }
>((set) => ({
  ...CONFIGURATION_INITIAL_STATE,
  actions: {
    setCurrentCategory: (category: CustomizationCategoryType) => {
      set({ currentCategory: category });
    },
    setCustomizationAssets: (category: AssetCategoryType, asset: unknown) => {
      set((state) => ({
        customizationAssets: {
          ...state.customizationAssets,
          [category]: asset,
        },
      }));
    },
  },
}));
