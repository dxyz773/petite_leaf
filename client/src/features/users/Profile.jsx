import EditProfileForm from "./EditProfileForm";
import { useUser } from "./useUser";

function Profile() {
  const { user } = useUser();
  const { email } = user;
  const { firstName, lastName, phoneNumber, birthday, avatar } =
    user.user_metadata;
  const formattedPhoneNumber = `(${phoneNumber?.slice(
    0,
    3,
  )}) ${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6)}`;
  console.log(birthday);
  const split = birthday.split("-");
  const formatedBirthday = `${split[1]}/${split[2]}/${split[0]}`;

  return (
    <div className="flex w-full flex-col gap-12 font-serif tracking-wide lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-32">
      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Edit Profile Photo</h1>

          <button
            className="text-xs underline"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Edit
          </button>
        </div>
        <div className="avatar mt-2">
          <div className="w-20 rounded-none">
            {avatar ? (
              <img src={avatar} alt={`${firstName} ${lastName} user avatar`} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="#757575"
                viewBox="0 0 256 256"
              >
                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm124.3-5.55a75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34,92,92,0,1,1,130.34,0ZM128,156a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Edit Profile Info</h1>
          <button
            className="text-xs underline"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Edit
          </button>
        </div>
        <ul className="order-2 mt-7 flex flex-col gap-2 text-sm">
          <li>
            <span className="font-semibold">First Name: </span>
            <span className="text-neutral-700">{firstName}</span>
          </li>
          <li>
            <span className="font-semibold">Last Name: </span>
            <span className="text-neutral-700">{lastName}</span>
          </li>

          <li>
            <span className="font-semibold">Phone Number: </span>
            <span className="text-neutral-700">
              {formattedPhoneNumber.length > 4 ? formattedPhoneNumber : ""}
            </span>
          </li>

          <li>
            <span className="font-semibold">Birthday: </span>
            <span className="text-neutral-700">
              {formatedBirthday.includes(undefined) ? "" : formatedBirthday}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Update Password</h1>
          <button
            className="text-xs underline"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Edit
          </button>
        </div>
        <ul className="order-2 mt-7 flex flex-col gap-2 text-sm">
          <li>
            <span className="font-semibold">Email: </span>
            <span className="text-neutral-700">{email}</span>
          </li>
          <li className="flex gap-2 align-middle">
            <span className="font-semibold">Password: </span>
            <span className="pt-1 text-neutral-700">*******</span>
          </li>
        </ul>
      </div>

      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box z-50 rounded-sm bg-neutral-100">
          <EditProfileForm modalId="my_modal_1" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box z-50 rounded-sm bg-neutral-100">
          <EditProfileForm imgModal={true} modalId="my_modal_2" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box z-50 rounded-sm bg-neutral-100">
          <EditProfileForm passwordModal={true} modalId="my_modal_4" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Profile;
