import { Outlet } from "react-router-dom";
import AccountNav from "./AccountNav";
function AccountLayout() {
  return (
    <div className="ml-auto mr-auto flex min-h-dvh w-11/12 flex-col gap-8 pb-72 pt-8 md:flex-row md:gap-4 lg:gap-6 lg:pt-20">
      <AccountNav />
      <Outlet />
    </div>
  );
}

export default AccountLayout;
