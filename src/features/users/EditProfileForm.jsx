import { useForm } from "react-hook-form";
import { useUser } from "./useUser";
import { useState } from "react";
import { useUpdateUser } from "../authentication/useUpdateUser";

function EditProfileForm({ imgModal = false, passwordModal = false, modalId }) {
  const [avatar, setAvatar] = useState("");
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { email } = user;
  const { firstName, lastName, phoneNumber, birthday } = user.user_metadata;

  function onSubmitProfileData(data) {
    updateUser(data, {
      onSuccess: () => {
        reset();
        document.getElementById(modalId).close();
      },
    });
  }

  function onSubmitAvatar(e) {
    e.preventDefault();

    if (!avatar) return;
    updateUser(
      { avatar },
      {
        onSuccess: () => {
          setAvatar("");
          e.target.reset();
          document.getElementById(modalId).close();
        },
      },
    );
  }

  function onSubmitPassword(data) {
    updateUser(data, {
      onSuccess: () => {
        reset();
        document.getElementById(modalId).close();
      },
    });
  }

  if (imgModal) {
    return (
      <div className="bg-neutral-100 pt-5">
        <h3 className="text-center text-[17px] font-semibold tracking-wide">
          Edit Profile Info
        </h3>
        <form
          className="flex flex-col gap-1 px-20 pb-16 pt-9"
          onSubmit={(e) => handleSubmit(onSubmitAvatar(e))}
        >
          <input
            id="avatar"
            type="file"
            className="w-max-w-xs file-input file-input-bordered file-input-md rounded-sm bg-stone-200"
            accept="image/*"
            disabled={isUpdating}
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <div className="flex flex-col gap-5">
            <button
              className="btn mt-5 w-full rounded-sm bg-neutral-950 text-xs font-normal text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
              disabled={isUpdating}
            >
              {isUpdating ? "Updating" : "Submit"}
            </button>
            <button
              className="self-end text-end text-xs underline"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (passwordModal) {
    return (
      <div className="bg-neutral-100 pt-5">
        <h3 className="text-center text-[17px] font-semibold tracking-wide">
          Update Password
        </h3>
        <form
          className="flex flex-col gap-1 px-20 pb-16 pt-9"
          onSubmit={handleSubmit(onSubmitPassword)}
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
              className="w-max-w-xs bg-neutral-200/40 px-2 py-1 text-neutral-300 min-[500px]:grow"
              placeholder={email}
              disabled
            />
          </label>

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
              className="w-max-w-xs bg-neutral-50 px-2 py-1 min-[500px]:grow"
              placeholder="New password"
              autoComplete="current-password"
              disabled={isUpdating}
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
              className="w-max-w-xs bg-neutral-50 px-2 py-1 min-[500px]:grow"
              placeholder="Confirm new password"
              autoComplete="current-password"
              disabled={isUpdating}
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
          <div className="flex flex-col gap-5">
            <button
              className="btn mt-3 w-full rounded-sm bg-neutral-950 text-xs font-normal text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Submit"}
            </button>
            <button
              className="self-end text-end text-xs underline"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 pt-5">
      <h3 className="text-center text-[17px] font-semibold tracking-wide">
        Edit Profile Info
      </h3>
      <form
        className="flex flex-col gap-4 px-2 pb-6 pt-9 min-[500px]:px-16"
        onSubmit={handleSubmit(onSubmitProfileData)}
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
            defaultValue={firstName}
            disabled={isUpdating}
            {...register("firstName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "First name must be at least 1 character",
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
            defaultValue={lastName}
            disabled={isUpdating}
            {...register("lastName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "Last name must be at least 1 character",
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
          htmlFor="phoneNumber"
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
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>

          <input
            id="phoneNumber"
            type="text"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Phone Number"
            defaultValue={"" || phoneNumber}
            disabled={isUpdating}
            {...register("phoneNumber", {
              required: "This field is required",
              minLength: {
                value: 10,
                message: "Phone Number must be at least 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone Number must not be more than 10 characters",
              },
              validate: (value) =>
                Number(value) || "Please enter a valid number",
            })}
          />
        </label>
        {errors?.phoneNumber?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.phoneNumber?.message}
          </p>
        )}
        <label
          type="date"
          className="input input-bordered flex items-center gap-2 rounded-sm"
          htmlFor="birthday"
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
              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
            />
          </svg>

          <input
            id="birthday"
            type="date"
            placeholder="Birthday"
            defaultValue={"" || birthday}
            disabled={isUpdating}
            className="grow bg-neutral-50 px-2 py-1"
            {...register("birthday")}
          />
        </label>
        {errors?.birthday?.message && (
          <p className="text-xs tracking-widest text-red-600">
            {errors?.birthday?.message}
          </p>
        )}
        <button
          className="btn btn-md mt-2 rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Submit"}
        </button>
        <button className="text-end text-xs underline" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
