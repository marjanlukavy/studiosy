import React from "react";

import { AddSVGIcon } from "@/components/UI/SVGIcons";
import useStudioStore, { StudioItem } from "@/stores/studio.store";
import SocialNetworkFormField from "./SocialNetworkFormField";

type SocialNetworkField = "name" | "link";

const SocialNetworkFormFields = () => {
  const studioItem: StudioItem = useStudioStore((state) => state.studioItem);
  const addSocialNetwork: (socialNetwork: {
    name: string;
    link: string;
  }) => void = useStudioStore((state) => state.addSocialNetwork);

  const handleAddField = () => {
    addSocialNetwork({ name: "", link: "" });
  };

  const handleRemoveField = (index: number): void => {
    const updatedSocialNetworks: { name: string; link: string }[] = [
      ...studioItem.socialNetworks,
    ];
    updatedSocialNetworks.splice(index, 1);
    useStudioStore.setState({
      studioItem: { ...studioItem, socialNetworks: updatedSocialNetworks },
    });
  };

  const handleFieldChange = (
    index: number,
    key: SocialNetworkField,
    value: string
  ): void => {
    const updatedSocialNetworks: { name: string; link: string }[] = [
      ...studioItem.socialNetworks,
    ];
    updatedSocialNetworks[index][key] = value;
    useStudioStore.setState({
      studioItem: { ...studioItem, socialNetworks: updatedSocialNetworks },
    });
  };

  return (
    <div className="border-gradient-br-grey-blue-900 border-transparent border-solid border rounded-lg p-5 w-full max-w-[575px] mt-5">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-gray text-[20px] leading-[23.44px] font-extralight">
          Social Networks
        </h3>
        <button onClick={handleAddField}>
          <AddSVGIcon />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {studioItem.socialNetworks.map((socialNetwork, index) => (
          <SocialNetworkFormField
            key={index}
            index={index}
            field={socialNetwork}
            handleFieldChange={handleFieldChange}
            handleRemoveField={handleRemoveField}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialNetworkFormFields;
