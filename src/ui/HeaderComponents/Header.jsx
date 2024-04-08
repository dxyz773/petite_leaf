import Navbar from "./Navbar";
import Logo from "./Logo";
import { useState } from "react";
import { Drawer } from "antd";
import LinkCustom from "../LinkCustom";
import Icon from "../Icon";
import { SVGDrawPaths } from "../../utils/helperData";
import { useUser } from "../../features/users/useUser";
import { useLogout } from "../../features/authentication/useLogout";

function Header() {
  const { user } = useUser();
  const { logout } = useLogout();
  const [openSideNav, setOpenSideNav] = useState(false);

  const showSideNav = () => {
    setOpenSideNav(true);
  };
  const closeSideNav = () => {
    setOpenSideNav(false);
  };

  const sideNavList = [
    { name: "Plants", to: "/products" },
    { name: "Collections", to: "/collections" },
    { name: "Pothos Collection", to: "/collections/the-pothos-collection" },
    {
      name: "Philodendron Collection",
      to: "/collections/the-philodendron-collection",
    },
    { name: "Bestsellers", to: "/collections/bestsellers-collection" },
    { name: "Our Story", to: "/our-story" },
    { name: "Leaf + Mental Wellness", to: "/leaf-mental-wellness" },
    { name: "The Botanical Journal", to: "/blog" },
    { name: "Profile", to: "/account" },
    { name: "Search Order", to: "/order/search" },
    { name: "Logout" },
  ];

  return (
    <header className="flex h-16 items-center justify-between border-b bg-stone-100/80 px-2 md:px-5">
      <div className="flex items-center gap-3 text-2xl font-normal uppercase">
        <button className="mt-[6px] md:hidden" onClick={showSideNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
        <Drawer
          onClose={closeSideNav}
          open={openSideNav}
          placement="left"
          width={500}
          styles={{
            content: {
              fontFamily: "serif",
              linkHoverColor: "#fff",
              backgroundColor: "#166534",
              color: "#f5f5f5",
            },
            body: {},
          }}
        >
          <div className="mt-3 flex flex-col gap-1 text-base tracking-wider">
            {sideNavList.slice(0, 5).map((curr) => (
              <LinkCustom
                key={curr.name}
                to={curr.to}
                type="sideNav"
                onClick={closeSideNav}
              >
                {curr.name}
              </LinkCustom>
            ))}
            <div className="my-3 border-b  border-lime-50"></div>
            {sideNavList.slice(5, 8).map((curr) => (
              <LinkCustom
                key={curr.name}
                to={curr.to}
                type="sideNav"
                onClick={closeSideNav}
              >
                {curr.name}
              </LinkCustom>
            ))}
            <div className="mb-5 mt-3 border-b border-lime-50"></div>
            {
              <LinkCustom
                key={sideNavList[9].name}
                to={sideNavList[9].to}
                type="sideNav"
                onClick={closeSideNav}
              >
                {sideNavList[9].name}
              </LinkCustom>
            }
            <div className="mb-5 mt-3 border-b border-lime-50"></div>
            {user ? (
              <>
                <LinkCustom
                  to={sideNavList[8].to}
                  type="sideNav"
                  onClick={closeSideNav}
                >
                  <div className="flex items-end gap-2">
                    <Icon draw={SVGDrawPaths.account} />
                    <span>{sideNavList[8].name}</span>
                  </div>
                </LinkCustom>
                <a
                  className="mt-5 w-12 pl-1 text-sm tracking-wider text-neutral-300"
                  onClick={() => {
                    logout();
                    closeSideNav();
                  }}
                >
                  Logout
                </a>
              </>
            ) : (
              <LinkCustom to="/login" type="sideNav" onClick={closeSideNav}>
                <div className="flex items-end gap-2">
                  <Icon draw={SVGDrawPaths.account} />
                  <span>{user ? sideNavList[10].name : "Login"}</span>
                </div>
              </LinkCustom>
            )}
          </div>
        </Drawer>
        <Logo />
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
