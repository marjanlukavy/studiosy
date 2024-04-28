export interface ImageType {
  path: string;
  id: string;
}

export interface StageType {
  uploadedFiles: File[];
  cost: number;
  moderationStatus: string;
  name: string;
  id: string;
  studioId: string;
  description: string;
  createdAt: number;
  images: ImageType[];
  isActive: boolean;
  updatedAt: number;
}
