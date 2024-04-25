import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/server/axiosConfig";

const withAuth = <P extends object>(Component: ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
      null
    );
    const router = useRouter();

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await auth.get("/me");
          setIsAuthenticated(response.status === 200);
        } catch (error) {
          setIsAuthenticated(false);
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
    }, []);

    // Redirect to login if not authenticated
    useEffect(() => {
      if (isAuthenticated === false) {
        router.replace("auth/login");
      }
    }, [isAuthenticated, router]);

    // Render the component if authenticated
    return isAuthenticated ? <Component {...(props as P)} /> : null;
  };

  return AuthComponent;
};

export default withAuth;
