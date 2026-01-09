import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContactLayout({ children }: Props) {
  console.log("Contact Layout");
  return (
    <section>
      <h1>Hello</h1>
      {children}
    </section>
  );
}
