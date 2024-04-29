import AddLogo from "@/components/Pages/Studio/CreateStudio/AddLogo";
import MainDetails from "@/components/Pages/Studio/CreateStudio/MainDetails";
import SelectMultipleEmailFields from "@/components/Pages/Studio/CreateStudio/SelectMultipleEmailFields";
import SelectMultiplePhoneFields from "@/components/Pages/Studio/CreateStudio/SelectMultiplePhoneFields";
import SocialNetworkFormFields from "@/components/Pages/Studio/CreateStudio/SocialNetworkFormFields";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import React from "react";

const CreateStudio = () => {
  return (
    <section className="centered-container flex items-center flex-col pt-10 relative mb-[100px] pb-[124px]">
      <AddLogo />
      <MainDetails />
      <SelectMultiplePhoneFields />
      <SelectMultipleEmailFields />
      <SocialNetworkFormFields />
      <BlueButton onClick={() => {}} className="mt-[161px]">
        Зберегти
      </BlueButton>
    </section>
  );
};

export default CreateStudio;
