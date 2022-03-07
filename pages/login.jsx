import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        username: name,
        password: password,
      })
      .then((response) => {
        router.push("/Login");
        console.log(response);
      });
  };

  return (
    <div className=" flex justify-center py-20">
      <div className="grid grid-cols-12 gap-10 max-w-4xl">
        <div className="  col-span-6">
          <h1 className=" mb-10 text-2xl font-bold">Login</h1>

          <form action="" onSubmit={submit}>
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-3" htmlFor="">
                Email
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id=""
                className="form__input col-span-9"
              />
            </div>
            <br />
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-3" htmlFor="">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form__input col-span-9"
                id=""
              />
            </div>
            <br />
            <div className="">
              <input
                type="submit"
                value="login"
                className="app__btn-outline w-full"
              />
            </div>
          </form>
          <br />
          <p>
            Dont have an account?{" "}
            <Link href="/Register">
              <a>Register</a>
            </Link>
          </p>
        </div>
        <div className="col-span-6">
          <h1 className=" mb-10 text-2xl font-bold">New customer</h1>
          <p>
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <br />
          <div className="">
            <a className="app__btn-outline inline-block">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
