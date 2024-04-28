// useUploadStore.ts
import { create } from "zustand";
import { ImageType, StageType } from "@/types/stage";

interface Stage {
  uploadedFiles: File[];
}

interface UploadStore {
  stages: Stage[];
  // stages: StageType[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  addStage: () => void;
  removeStage: (index: number) => void;

  addImageToStage: (index: number, files: FileList) => void;
  removeImageFromStage: (index: number, imageIndex: number) => void;
}

type Store = {
  stages: StageType[];
  activeIndex: number;
};

type Actions = {
  setActiveIndex: (index: number) => void;

  addStage: () => void;
  removeStage: (index: number) => void;

  addImageToStage: (index: number, files: FileList) => void;
  removeImageFromStage: (index: number, imageIndex: number) => void;
};
const MAX_COUNT = 5;

const defaultStage = {
  cost: 0,
  name: "",
  studioId: "",
  description: "",
  isActive: true,
  images: [
    {
      path: "",
    },
  ],
  covers: [
    {
      path: "",
    },
  ],
};

const useUploadStore = create<UploadStore>((set) => ({
  stages: [{ uploadedFiles: [] }],
  // stages: [defaultStage],
  activeIndex: 0,

  setActiveIndex: (index) =>
    set((state) => ({
      activeIndex: index,
    })),

  addStage: () =>
    set((state) => ({
      stages: [...state.stages, { uploadedFiles: [] }],
      activeIndex: state.stages.length,
    })),
  removeStage: (index) =>
    set((state) => ({
      stages: state.stages.filter((_, i) => i !== index),
      activeIndex: Math.min(state.activeIndex, state.stages.length - 1),
    })),
  addImageToStage: (index, files) =>
    set((state) => {
      const stages = [...state.stages];
      stages[index].uploadedFiles.push(...Array.from(files));
      return {
        stages,
      };
    }),
  removeImageFromStage: (index, imageIndex) =>
    set((state) => {
      const stages = [...state.stages];
      stages[index].uploadedFiles.splice(imageIndex, 1);
      return {
        stages,
      };
    }),
}));

export default useUploadStore;
