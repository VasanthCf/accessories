import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";

function FormBuy() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const nav = useNavigation();
  console.log(nav.state);
  return (
    <>
      <div className="w-76 bg-slate-50 h-auto">
        <Form method="post">
          <div className="flex items-start flex-col justify-evenly space-y-11 p-10">
            <label className="space-x-1">
              Name:
              <input
                type="text"
                name="name"
                className="ml-5 border-2 border-slate-600 focus:outline-none"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                className="ml-5 border-2 border-slate-600 focus:outline-none"
                defaultValue={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                className="ml-5 border-2 border-slate-600 focus:outline-none"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>

            <button
              type="submit"
              className="font-semibold bg-slate-800 px-5 py-4 text-slate-50 active:bg-slate-600"
              disabled={nav.state === "submitting"}
            >
              {" "}
              Submit & Place order
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
export async function formAction() {
  return redirect("/placed");
}
export default FormBuy;
