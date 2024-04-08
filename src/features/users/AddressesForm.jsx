import { useForm } from "react-hook-form";
import { states } from "../../utils/stateData";
import { useUser } from "./useUser";
import { useAddAddress } from "./useAddAddress";
import { useUpdateAddress } from "./useUpdateAddress";

function AddressesForm({ edit = false, address = "" }) {
  const { user } = useUser();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { addAddress, isAdding } = useAddAddress();
  const { updateAddress, isUpdating } = useUpdateAddress();

  function onSubmitAdd(data) {
    if (!data) return;
    addAddress(data, {
      onSuccess: () => {
        reset();

        document.getElementById("my_modal_3").close();
      },
    });
  }

  function onSubmitEdit(data) {
    if (!data) return;
    data.id = address?.id;

    updateAddress(data, {
      onSuccess: () => {
        reset();

        document.getElementById(`my_modal_5${address?.id}`).close();
      },
    });
  }

  console.log(address);
  return (
    <div className="bg-neutral-100 pt-4">
      <h3 className="text-center text-[17px] font-semibold tracking-wide">
        {edit ? "Edit Address" : "Add Address"}
      </h3>
      <form
        className="mt-10 pl-2 pr-2 font-serif"
        onSubmit={handleSubmit(edit ? onSubmitEdit : onSubmitAdd)}
      >
        <div className="pb-6">
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="nickname"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z"></path>
            </svg>
            <input
              id="nickname"
              type="text"
              disabled={isAdding || isUpdating}
              defaultValue={address?.nickname}
              className="grow bg-neutral-50 px-2 py-1"
              placeholder="Address Nickname"
              {...register("nickname", {
                required: "This field is required",
                minLength: {
                  value: 1,
                  message: "Nickname must be more than 1 character",
                },
              })}
            />
          </label>
          {errors?.nickname?.message && (
            <p className="text-xs tracking-widest text-red-600">
              {errors?.nickname?.message}
            </p>
          )}

          <label
            type="text"
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="country"
          >
            <input
              id="country"
              type="text"
              disabled
              className="grow bg-neutral-200/40 px-2 py-1 text-sm tracking-wide text-neutral-400"
              {...register("country", { value: "United States" })}
            />
          </label>
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="firstName"
          >
            <input
              id="firstName"
              type="text"
              defaultValue={address?.firstName}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="First Name"
              disabled={isAdding || isUpdating}
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
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.firstName?.message}
            </p>
          )}
          <input type="hidden" {...register("user_id", { value: user?.id })} />
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="lastName"
          >
            <input
              id="lastName"
              type="text"
              defaultValue={address?.lastName}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="Last Name"
              disabled={isAdding || isUpdating}
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
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.lastName?.message}
            </p>
          )}
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="company"
          >
            <input
              id="company"
              type="text"
              defaultValue={address?.company}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="Company (optional)"
              disabled={isAdding || isUpdating}
              {...register("company")}
            />
          </label>
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="address"
          >
            <input
              id="address"
              type="text"
              defaultValue={address?.address}
              disabled={isAdding || isUpdating}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="Address"
              {...register("address", {
                required: "This field is required",
                minLength: {
                  value: 1,
                  message: "Address must be more than 1 character",
                },
              })}
            />
          </label>
          {errors?.address?.message && (
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.address?.message}
            </p>
          )}
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="apt"
          >
            <input
              id="apt"
              type="text"
              defaultValue={address?.apt}
              disabled={isAdding || isUpdating}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="Apartment, suite, etc. (optional)"
              {...register("apt")}
            />
          </label>
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="city"
          >
            <input
              id="city"
              type="text"
              defaultValue={address?.city}
              disabled={isAdding || isUpdating}
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
              placeholder="City"
              {...register("city", {
                required: "This field is required",
                minLength: {
                  value: 1,
                  message: "City must be more than 1 character",
                },
              })}
            />
          </label>
          {errors?.city?.message && (
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.city?.message}
            </p>
          )}

          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="state"
          >
            <select
              name="state"
              id="state"
              disabled={isAdding || isUpdating}
              defaultValue={
                states.find((state) => state.value === address?.state)?.value
              }
              className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide text-zinc-500"
              {...register("state", { required: "This field is required" })}
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.text}
                </option>
              ))}
            </select>
          </label>
          {errors?.state?.message && (
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.state?.message}
            </p>
          )}
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="zipCode"
          >
            <input
              id="zipCode"
              type="text"
              defaultValue={address?.zipCode}
              disabled={isAdding || isUpdating}
              className="grow bg-neutral-50 px-2 py-1 text-sm"
              placeholder="ZIP Code"
              {...register("zipCode", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Please enter a valid ZIP Code",
                },
                maxLength: {
                  value: 5,
                  message: "Please enter a valid ZIP Code",
                },
              })}
            />
          </label>
          {errors?.zipCode?.message && (
            <p className="mb-4 text-xs tracking-widest text-red-600">
              {errors?.zipCode?.message}
            </p>
          )}
          <label
            className="input input-bordered mb-3 flex items-center gap-2 rounded-sm"
            htmlFor="phoneNumber"
          >
            <input
              id="phoneNumber"
              type="text"
              defaultValue={address?.phoneNumber}
              disabled={isAdding || isUpdating}
              className="grow bg-neutral-50 px-2 py-1 text-sm"
              placeholder="Phone Number (optional)"
              {...register("phoneNumber")}
            />
          </label>

          <button
            className="btn btn-md mt-2 w-full rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            disabled={isAdding || isUpdating}
          >
            Add/Edit
          </button>
          <button className="ml-[92%] text-xs underline" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressesForm;
