import { ImageType, StageType } from "@/types/stage";

export interface TagType {
  isModerated: boolean;
  value: string;
  id: string;
  createdAt: number;
  updatedAt: number;
}

export interface PhoneNumberType {
  value: string;
  id: string;
  studioId: string;
  label: string;
  createdAt: number;
  updatedAt: number;
}

export interface PostalAddressType {
  longitude: number;
  id: string;
  studioId: string;
  cityId: string;
  street: string;
  createdAt: number;
  updatedAt: number;
  latitude: number;
}

export interface EmailAddressType {
  value: string;
  id: string;
  studioId: string;
  label: string;
  createdAt: number;
  updatedAt: number;
}

export interface StudioType {
  tags: TagType[];
  stages: StageType[];
  updatedAt: number;
  moderationStatus: string;
  phoneNumbers: PhoneNumberType[];
  postalAddress: PostalAddressType;
  emailAddresses: EmailAddressType[];
  createdAt: number;
  socialAccounts: any[]; // You can define a proper type for socialAccounts if needed
  ownerId: string;
  id: string;
  covers: any[]; // You can define a proper type for covers if needed
  isActive: boolean;
  name: string;
  logo: ImageType;
  siteUrl: string;
}
