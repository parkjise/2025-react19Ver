export default function DashboardLayout({
  children,
  analytics,
  posts,
}: Readonly<{
  children?: React.ReactNode;
  analytics?: React.ReactNode;
  posts?: React.ReactNode;
}>) {
  const conditional = false;
  return (
    <>
      {children}
      {conditional ? analytics : posts}
    </>
  );
}
