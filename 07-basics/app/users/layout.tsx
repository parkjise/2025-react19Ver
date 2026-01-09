import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function UserLayout({ children }: Props) {
  console.log("User Layout");
  return (
    <section>
      <h1>User Layout</h1>
      {children}
    </section>
  );
}
