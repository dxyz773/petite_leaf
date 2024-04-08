import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, password }) {
    signup(
      { firstName, lastName, email, password },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }

  return (
    <div className="w-[650px] border border-stone-300/65 bg-neutral-100 pb-8 pt-10 font-serif shadow-xl">
      <h3 className="text-center text-[17px] font-semibold tracking-wide">
        Create Account
      </h3>
      <form
        className="mb-8 mt-16 flex flex-col gap-4 px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="firstName"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="firstName"
            type="text"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="First Name"
            disabled={isLoading}
            {...register("firstName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "First name must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.firstName?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.firstName?.message}
          </p>
        )}
        <label
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="lastName"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="lastName"
            type="text"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Last Name"
            disabled={isLoading}
            {...register("lastName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "Last name must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.lastName?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.lastName?.message}
          </p>
        )}
        <label
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            type="text"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Email"
            autoComplete="username"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </label>
        {errors?.email?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.email?.message}
          </p>
        )}
        <label
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="password"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="password"
            type="password"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Password (min 7 chars)"
            autoComplete="current-password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 7,
                message: "Password must be at least 7 characters",
              },
            })}
          />
        </label>
        {errors?.password?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.password?.message}
          </p>
        )}
        <label
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="passwordConfirm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <input
            id="passwordConfirm"
            type="password"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Confirm password"
            autoComplete="current-password"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </label>
        {errors?.passwordConfirm?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.passwordConfirm?.message}
          </p>
        )}

        <button
          className="btn btn-md mt-2 rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
          disabled={isLoading}
        >
          Submit
        </button>
        <button
          className="text-end text-xs underline"
          type="reset"
          disabled={isLoading}
        >
          Reset
        </button>
      </form>
      <p className="flex justify-center gap-2 pt-2 text-sm tracking-wide">
        Already have an account?
        <button
          className="text-end text-xs font-semibold tracking-wider text-indigo-700 hover:underline hover:underline-offset-2"
          onClick={() => navigate("/login")}
          disabled={isLoading}
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignupForm;
