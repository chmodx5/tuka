import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/register", {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        router.push("/Login");
        console.log(response);
      });
  };

  return (
    <div className="flex justify-center py-20">
      <div className=" max-w-2xl">
        <h1 className=" mb-10 text-2xl font-bold">Sign up</h1>

        <form onSubmit={submit}>
          <div className="grid grid-cols-12 gap-4">
            <label className="col-span-3" htmlFor="">
              Username
            </label>
            <input
              type="text"
              name="email"
              id=""
              className="form__input col-span-9"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="grid grid-cols-12 gap-4">
            <label className="col-span-3" htmlFor="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="form__input col-span-9"
              onChange={(e) => setEmail(e.target.value)}
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
              className="form__input col-span-9"
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
          </div>
          <br />
          <div className="">
            <button type="submit" className="app__btn-outline w-full">
              SIgn up
            </button>
          </div>
        </form>
        <br />
        <p>
          Already have an account?
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default register;
