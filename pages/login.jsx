import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);
  };

  return (
    <div className=" flex justify-center py-20">
      <div className="grid grid-cols-12 gap-10 max-w-4xl">
        <div className="  col-span-6">
          <h1 className=" mb-10 text-2xl font-bold">Login</h1>

          <form action="" onSubmit={onSubmit}>
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-3" htmlFor="">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={handleChange}
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
