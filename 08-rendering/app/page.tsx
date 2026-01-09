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

export default async function Home() {
  const employees = await axios.get("http://localhost:3004/employees");
  const showEmployees = (employees as EmployeesResponse).data.map(
    (employee) => (
      <div key={employee.id}>
        <div className="card">
          <div className="card-body">
            <h3>{employee.fullname}</h3>
            <hr />
            <p className="card-text">{employee.position}</p>
            <p className="card-text">{employee.age}</p>
            <Link href={`/employee/${employee.id}`} className="btn btn-primary">
              Go to empl
            </Link>
          </div>
        </div>
      </div>
    )
  );

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
