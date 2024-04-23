import AddLogo from "@/components/Pages/Studio/CreateStudio/AddLogo";
import MainDetails from "@/components/Pages/Studio/CreateStudio/MainDetails";
import SelectMultipleEmailFields from "@/components/Pages/Studio/CreateStudio/SelectMultipleEmailFields";
import SelectMultiplePhoneFields from "@/components/Pages/Studio/CreateStudio/SelectMultiplePhoneFields";
import SocialNetworkFormFields from "@/components/Pages/Studio/CreateStudio/SocialNetworkFormFields";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import StudioWarning from "@/components/UI/StudioWarning";
import React from "react";

const EditStudio = () => {
  // pass data using props
  return (
    <section className="centered-container flex items-center flex-col pt-10 relative pb-[124px]">
      <AddLogo />
      <MainDetails />
      <SelectMultiplePhoneFields />
      <SelectMultipleEmailFields />
      <SocialNetworkFormFields />
      <BlueButton onClick={() => {}} className="mt-[30px]">
        Зберегти
      </BlueButton>
      <StudioWarning />
    </section>
  );
};

export default EditStudio;
