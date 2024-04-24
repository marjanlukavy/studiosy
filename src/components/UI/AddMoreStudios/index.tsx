import Link from "next/link";
import React from "react";

const AddMoreStudios = () => {
  return (
    <Link
      href="/studio/create-studio"
      className="font-robot leading-[23.44px] text-[20px] text-black font-light text-center group"
    >
      Маєте декілька студій?
      <span className="font-medium group-hover:underline"> Додайте ще</span>
    </Link>
  );
};

export default AddMoreStudios;
