import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "../components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Signup() {
  const navigation = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  async function create(data) {
    setError("");

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));

        navigation("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-bold text-center leading-tight">
          Sign up to create an account.
        </h2>
        <p className="mt-2 text-center text-black/60">
          Already have an account?&nbsp;{" "}
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-4=5">
            <Input
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
                minLength: 3,
              })}
            />
            <Input
              label="Email"
              placeholder="Enter you email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Email must be a valid email address",
                },
              })}
            />
            <Input
              type="password"
              label="Password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
