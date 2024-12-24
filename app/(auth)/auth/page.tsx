"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthPage: React.FC = () => {
  const route = useRouter();

  useEffect(() => {
    route.push("/auth/signin");
  }, []);

  return <></>;
};

export default AuthPage;
