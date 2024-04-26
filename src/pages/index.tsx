import { Inter } from "next/font/google";
import UnRegisteredUsers from "@/components/Pages/Studio/UnregisteredUsers";
import { auth } from "@/server/axiosConfig";
import { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await auth.get("/me");
        setResponse({ status_code: response.status, data: response.data });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
      <div className="w-full flex flex-col gap-5">
        <div>Home {JSON.stringify(response)}</div>
        <UnRegisteredUsers />
        <UnRegisteredUsers />
      </div>
  );
}

export default withAuth(Home);
