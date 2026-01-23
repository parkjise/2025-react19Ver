import EditForm from "@/app/components/edit_form";

type Props = {
  params: Promise<{ id: string }>;
};

async function getEmployee(ID: string) {
  const res = await fetch(`http://localhost:3004/employees/${ID}`);
  if (!res.ok) {
    throw new Error("Could not employee");
  }
  return res.json();
}

export default async function EditPage({ params }: Props) {
  const ID = (await params).id;
  const employee = await getEmployee(ID);
  ID;
  return (
    <>
      <EditForm employee={employee} />
    </>
  );
}
