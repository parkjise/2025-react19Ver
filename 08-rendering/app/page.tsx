import axios from "axios";
import Link from "next/link";
import Counter from "./components/counter";
import { counterTrigger } from "@/app/helpers/actions";
type Employee = {
  id: string | number;
  fullname: string | number;
  position: string | number;
  age: string | number;
};

type EmployeesResponse = {
  data: Employee[];
};

async function getEmployee() {
  const res = await fetch("http://localhost:3004/employees");
  if (!res.ok) {
    throw new Error("Oop, no empoyees found");
  }
  return res.json();
}

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const employees = await getEmployee();
  const showEmployees = (employees as Employee[]).map((employee) => (
    <div key={employee.id}>
      <div className="card">
        <div className="card-body">
          <h3>{employee.fullname}</h3>
          <hr />
          <p className="card-text">{employee.position}</p>
          <p className="card-text">{employee.age}</p>
          <Link href={`/employess/${employee.id}`} className="btn btn-primary">
            Go to empl
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1>Employees : </h1>
      <div className="row row-cols-1 rows-cols-sm-2 row-cols-md-3 g-3">
        {showEmployees}
      </div>
      <Counter counterTrigger={counterTrigger} />
    </>
  );
}
