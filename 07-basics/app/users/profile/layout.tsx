import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: Props) {
  console.log("Profile Layout");
  return (
    <section className="user">
      <h1>Profile Layout</h1>
      {children}
    </section>
  );
}
