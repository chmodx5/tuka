import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./api/auth";
import { useRouter } from "next/router";

export default function login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, isLoggedIn, errors } = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }),
    [isLoggedIn];

  const submit = async (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      alert("please fill all fields");
    } else {
      try {
        dispatch(loginPending());

        const isLoggedIn = await userLogin({
          username: name,
          password: password,
        });
        console.log("isLoggedIn", isLoggedIn);
        if (isLoggedIn.success === false) {
          dispatch(loginFail());
        } else {
          dispatch(loginSuccess());
        }
      } catch (err) {
        dispatch(loginFail(err));
      }
    }
    // axios
    //   .post("http://localhost:3000/auth/login", {
    //     username: name,
    //     password: password,
    //   })
    //   .then((response) => {
    //     router.push("/");
    //     console.log(response);
    //   });
  };

  return (
    <div className=" flex justify-center py-20">
      <div className="grid grid-cols-12 gap-10 max-w-4xl">
        <div className="  col-span-12 md:col-span-6">
          <h1 className=" mb-10 text-2xl font-bold">Login</h1>

          <form action="" onSubmit={submit}>
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-3" htmlFor="">
                Username
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
              {isLoading ? (
                <p>loading ..</p>
              ) : (
                <input
                  type="submit"
                  value="login"
                  className="app__btn-outline w-full"
                />
              )}
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
        <div className=" col-span-12 md:col-span-6">
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
