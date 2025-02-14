import { create } from 'zustand';
import {
  CustomizationCategoryType,
  customizationCategoryData,
} from '../../db/customization-groups';
import {
  CustomizationAssetsType,
  customizationAssetsData,
} from '../../db/customization-assets';

type ConfigurationState = {
  categories: CustomizationCategoryType[];
  currentCategory: CustomizationCategoryType | null;
  assets: CustomizationAssetsType[];
};

type ConfigurationAction = {
  setCurrentCategory: (category: CustomizationCategoryType) => void;
};

const CONFIGURATION_INITIAL_STATE: ConfigurationState = {
  categories: customizationCategoryData,
  currentCategory: customizationCategoryData[0],
  assets: customizationAssetsData,
};

export const useConfigurationStore = create<
  ConfigurationState & { actions: ConfigurationAction }
>((set) => ({
  ...CONFIGURATION_INITIAL_STATE,
  actions: {
    setCurrentCategory: (category: CustomizationCategoryType) => {
      set({ currentCategory: category });
    },
  },
}));
