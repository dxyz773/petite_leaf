import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";

function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    if (!data) return;
    login(data, {
      onSettled: () => {
        reset();
      },
    });
  }

  return (
    <div className="w-[650px] border border-stone-300/65 bg-neutral-100 pb-8 pt-10 font-serif shadow-xl">
      <h3 className="text-center text-xl font-semibold tracking-wider">
        Login
      </h3>
      <form
        className="mb-10 mt-16 flex flex-col gap-4 px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {...register("email", {
              required: "This field is required",
            })}
            disabled={isLoading}
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
            placeholder="password"
            autoComplete="current-password"
            {...register("password", {
              required: "This field is required",
              validate: (value) =>
                value.length > 6 || "Password must be at least 7 characters",
            })}
            disabled={isLoading}
          />
        </label>
        {errors?.password?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.password?.message}
          </p>
        )}

        <button
          className="btn btn-md mt-2 rounded-sm bg-neutral-950 text-center text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md text-lime-400"></span>
          ) : (
            "Submit"
          )}
        </button>
        <button className="text-end text-xs underline" type="reset">
          Reset
        </button>
      </form>
      <p className="flex justify-center gap-2 pt-2 text-sm tracking-wide">
        Don&apos;t have an account yet?
        <button
          className="text-end text-xs font-semibold tracking-wider text-indigo-700 hover:underline hover:underline-offset-2"
          onClick={() => navigate("/register")}
        >
          Create account
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
