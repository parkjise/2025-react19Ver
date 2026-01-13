"use server";

import axios from "axios";

export async function counterTrigger() {
  console.log("counter trigger");
}

export async function addEmployee(prevState: unknown, formdata: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(prevState);
  try {
    if (formdata.get("fullname") === "") {
      throw new Error("The name is required");
    }
    await axios.post("http://localhost:3004/employees", {
      fullname: formdata.get("fullname"),
      position: formdata.get("position"),
      age: formdata.get("age"),
    });
    return {
      success: true,
      message: "Name Added",
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "e instanceof Error";
    return {
      success: false,
      message: message,
    };
  }
}
