import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-center py-20">
      <div className=" max-w-2xl">
        <h1 className=" mb-10 text-2xl font-bold">Sign up</h1>

        <form action="">
          <div className="grid grid-cols-12 gap-4">
            <label className="col-span-3" htmlFor="">
              Username
            </label>
            <input
              type="text"
              name="email"
              id=""
              className="form__input col-span-9"
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
              id=""
            />
          </div>
          <br />
          <div className="">
            <button className="app__btn-outline w-full">SIgn up</button>
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

export default Register;
