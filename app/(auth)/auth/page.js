"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

const AuthPage = () => {
  const route = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession(authOptions);
      if (!session) {
        route.push("/auth/signin");
      }
    };

    checkSession();
  }, [route]);

  return <></>;
};

export default AuthPage;
