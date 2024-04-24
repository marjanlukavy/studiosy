import Image from "next/image";
import { Inter } from "next/font/google";
import UnRegisteredUsers from "@/components/Pages/Studio/UnregisteredUsers";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-5">
      <UnRegisteredUsers />
      <UnRegisteredUsers />
    </div>
  );
}
