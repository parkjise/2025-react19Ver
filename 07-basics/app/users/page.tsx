"use client";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();
  const redirectUser = () => {
    router.push("/");
  };

  return (
    <>
      <h1>I am Users</h1>
      <button onClick={redirectUser}>Go Home</button>
    </>
  );
}
