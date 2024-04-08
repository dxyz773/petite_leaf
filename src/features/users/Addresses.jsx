import AddressesForm from "./AddressesForm";
import { useUserAddresses } from "./useUserAddresses";
import Loading from "../../ui/Loading";
import UserAddress from "./UserAddress";
import { useDeleteAddress } from "./useDeleteAddress";

function Addresses() {
  const { addresses, isLoading } = useUserAddresses();
  const { deleteAddress, isDeleting } = useDeleteAddress();
  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full flex-col  gap-8 font-serif tracking-wide ">
      <div
        className="flex justify-between align-middle"
        style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
      >
        <h1 className="text-xl">Edit Address Information</h1>
        <button
          className="text-xs underline"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add New Address
        </button>
      </div>
      <div className="flex w-auto gap-8">
        {!isLoading && !addresses.length ? (
          <ul className="flex flex-col text-sm">
            <p className="text-neutral-500">
              You haven&apos;t saved any addresses.
            </p>
          </ul>
        ) : (
          addresses.map((curr) => (
            <div
              key={curr.id}
              className="flex max-w-[230px] flex-col border border-neutral-300 py-5  pl-4 pr-7 text-sm"
            >
              <p className="ml-6 text-neutral-400">Nickname: {curr.nickname}</p>
              <div className="pb-5">
                <UserAddress
                  firstName={curr.firstName}
                  lastName={curr.lastName}
                  address={curr.address}
                  apt={curr.apt}
                  city={curr.city}
                  state={curr.state}
                  company={curr.company}
                  zipCode={curr.zipCode}
                  country={curr.country}
                  phoneNumber={curr.phoneNumber}
                />
              </div>
              <div className="mt-auto flex gap-1 self-end justify-self-end text-xs text-neutral-600">
                <button
                  className="underline"
                  value={curr.id}
                  disabled={isDeleting}
                  onClick={() => deleteAddress(curr.id)}
                >
                  Delete
                </button>
                <span>|</span>
                <button
                  className="underline"
                  onClick={() =>
                    document.getElementById(`my_modal_5${curr.id}`).showModal()
                  }
                >
                  Edit
                </button>
              </div>
              <dialog id={`my_modal_5${curr.id}`} className="modal pt-4">
                <div className="modal-box z-50 rounded-sm bg-neutral-100">
                  <AddressesForm
                    key={curr.created_at}
                    edit={true}
                    address={curr}
                  />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))
        )}
      </div>
      <dialog id="my_modal_3" className="modal pt-4">
        <div className="modal-box z-50 rounded-sm bg-neutral-100">
          <AddressesForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Addresses;
