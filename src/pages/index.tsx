import { Inter } from "next/font/google";
import NoAuthStudiosLayout from "@/components/Pages/Studio/NoAuthStudiosLayout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoAuthStudiosLayout />
    </div>
  );
}

export default Home;
