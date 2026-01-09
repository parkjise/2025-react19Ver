import { redirect } from "next/navigation";

interface UserNamePageProps {
  params: Promise<{
    name: string;
    id: string;
  }>;
  searchParams: Promise<{
    query: string;
  }>;
}

export default async function UserNamePage({
  params,
}: // searchParams,
UserNamePageProps) {
  const { name, id } = await params;
  // const name = (await params).name;
  // const data = await params;
  // const query = await searchParams;

  if (id !== "100") {
    redirect("/");
  }
  return (
    <>
      <h1>
        {id} is the ID : {name} is the name
      </h1>
    </>
  );
}
