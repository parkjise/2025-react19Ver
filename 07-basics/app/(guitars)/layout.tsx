export default function GuitarsLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Guitars</h1>
      <hr />
      {children}
    </section>
  );
}
