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

  // const isEdit = edit;
  // console.log(isEdit);

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
              // disabled={isLoading}
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
              // disabled={isLoading}
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
              // disabled={isLoading}
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
              className="grow bg-neutral-50 px-2 py-1 text-sm"
              placeholder="Phone Number (optional)"
              {...register("phoneNumber")}
            />
          </label>

          <button
            className="btn btn-md mt-2 w-full rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            // disabled={isUpdating}
          >
            {/* {isUpdating ? "Updating..." : "Submit"} */}
            Add/Edit
          </button>
          <button className="ml-[92%] text-xs underline" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
    // <div className="bg-neutral-100 pt-4">
    //   <h3 className="text-center text-[17px] font-semibold tracking-wide">
    //     Add/Edit Address
    //   </h3>
    //   <form
    //     className="flex  flex-col gap-4  px-16 pt-8"
    //     onSubmit={handleSubmit(onSubmitAddress)}
    //   >
    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="firstName"
    //     >
    //       <input
    //         id="firstName"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="First Name"
    //         {...register("firstName", {
    //           required: "This field is required",
    //           minLength: {
    //             value: 1,
    //             message: "First Name must be more than 1 character",
    //           },
    //         })}
    //       />
    //     </label>
    //     {errors?.firstName?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.firstName?.message}
    //       </p>
    //     )}

    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="lastName"
    //     >
    //       <input
    //         id="lastName"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="Last Name"
    //         {...register("lastName", {
    //           required: "This field is required",
    //           minLength: {
    //             value: 1,
    //             message: "Last Name must be more than 1 character",
    //           },
    //         })}
    //       />
    //     </label>
    //     {errors?.lastName?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.lastName?.message}
    //       </p>
    //     )}
    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="street"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="h-5 w-5"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    //         />
    //       </svg>

    //       <input
    //         id="street"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="Street"
    //         {...register("street", {
    //           required: "This field is required",
    //           minLength: {
    //             value: 1,
    //             message: "Street must be more than 1 character",
    //           },
    //         })}
    //       />
    //     </label>
    //     {errors?.street?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.street?.message}
    //       </p>
    //     )}
    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="streetOptional"
    //     >
    //       <input
    //         id="streetOptional"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="Street - Optional"
    //         {...register("streetOptional")}
    //       />
    //     </label>
    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="city"
    //     >
    //       <input
    //         id="city"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="City"
    //         {...register("city", {
    //           required: "This field is required",
    //           minLength: {
    //             value: 1,
    //             message: "City must be more than 1 character",
    //           },
    //         })}
    //       />
    //     </label>
    //     {errors?.city?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.city?.message}
    //       </p>
    //     )}

    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="state"
    //     >
    //       <select
    //         // name="state"
    //         id="state"
    //         className="grow bg-neutral-50 px-2 py-1
    //          text-zinc-500"
    //         {...register("state", { required: "This field is required" })}
    //       >
    //         {states.map((state) => (
    //           <option key={state.value} value={state.value}>
    //             {state.text}
    //           </option>
    //         ))}
    //       </select>
    //     </label>
    //     {errors?.state?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.state?.message}
    //       </p>
    //     )}

    //     <label
    //       type="text"
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="country"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="20"
    //         height="20"
    //         fill="#000000"
    //         viewBox="0 0 256 256"
    //       >
    //         <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path>
    //       </svg>
    //       <input
    //         id="country"
    //         type="text"
    //         defaultValue="Unites States"
    //         disabled
    //         className="grow bg-neutral-200/40 px-2 py-1 text-neutral-300"
    //         {...register("country", { value: "United States" })}
    //       />
    //     </label>

    //     <label
    //       className="input input-bordered flex items-center gap-2 rounded-sm"
    //       htmlFor="phoneNumber"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="h-5 w-5"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    //         />
    //       </svg>

    //       <input
    //         id="phoneNumber"
    //         type="text"
    //         className="grow bg-neutral-50 px-2 py-1"
    //         placeholder="Phone Number - 10 digits"
    //         {...register("phoneNumber", {
    //           required: "This field is required",
    //           minLength: {
    //             value: 10,
    //             message: "Value must be 10 digits",
    //           },
    //           maxLength: { value: 10, message: "Value must be 10 digits" },
    //           validate: (value) =>
    //             value.split("").every((curr) => !isNaN(curr)) ||
    //             "Please enter a valid phone number",
    //         })}
    //       />
    //     </label>
    //     {errors?.phoneNumber?.message && (
    //       <p className="text-xs tracking-widest text-red-600">
    //         {errors?.phoneNumber?.message}
    //       </p>
    //     )}

    //     <button
    //       className="btn btn-md mt-2 rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
    //       type="submit"
    //     >
    //       Add
    //     </button>
    //     <button className="text-end text-xs underline" type="reset">
    //       Reset
    //     </button>
    //   </form>
    // </div>
  );
}

export default AddressesForm;

{
  /* <label
className="input input-bordered flex items-center gap-2 rounded-sm"
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
)} */
}
