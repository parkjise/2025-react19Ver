import axios from "axios";

export default function addPage() {
  async function onSubmit(formdata) {
    "use server";
    await axios.post("http://localhost:3004/employees", {
      fullname: formdata.get("fullname"),
      position: formdata.get("position"),
      age: formdata.get("age"),
    });
  }
  return (
    <>
      <h1>Add Page</h1>
      <div>
        <form action={onSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            id="fullname"
            placeholder="Enter the Fullname"
            name="fullname"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="position"
            placeholder="Enter the position"
            name="position"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="age"
            placeholder="Enter the age"
            name="age"
          />
          <button type="submit" className="btn btn-primary mb-3">
            Add Employee
          </button>
        </form>
      </div>
    </>
  );
}
