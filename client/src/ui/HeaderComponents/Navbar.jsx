import Icon from "../Icon";
import LinkCustom from "../LinkCustom";
import { SVGDrawPaths } from "../../utils/helperData";
import { usePlantSearch } from "../../context/SearchContext";
import Btn from "../Btn";
import { useDispatch } from "react-redux";
import { openDropDown } from "./dropDownSlice";
import { Badge } from "antd";

import { useUser } from "../../features/users/useUser";
import { useCart } from "../../features/cart/CartContext";
import UserAccountDropdown from "./UserAccountDropdown";
import NonUserAccountDropdown from "./NonUserAccountDropdown";

function Navbar() {
  const { user } = useUser();

  const avatar = user?.user_metadata?.avatar || null;

  const { showDrawer, cart } = useCart();
  const { openSearch } = usePlantSearch();
  const dispatch = useDispatch();
  const numItems = cart
    ? cart?.reduce((acc, curr) => acc + curr.quantity, 0)
    : [];

  return (
    <nav>
      <ul className="flex items-center md:gap-3">
        <li className="hidden md:inline-block">
          <LinkCustom
            to="/products"
            type="nav"
            text="shop"
            hover={() => dispatch(openDropDown(1))}
          />
        </li>
        <li className="hidden md:inline-block">
          <LinkCustom
            to="our-story"
            type="nav"
            text="our story"
            hover={() => dispatch(openDropDown(2))}
          />
        </li>
        <li className="hidden md:inline-block">
          <LinkCustom
            to="/blog"
            type="nav"
            text="blog"
            hover={() => dispatch(openDropDown(3))}
          />
        </li>

        <li className="hidden lg:inline-block">
          <LinkCustom to="/playground" type="nav" text="playground" />
        </li>

        <li>
          <Btn onClick={openSearch} type="nav">
            <Icon draw={SVGDrawPaths.search} />
          </Btn>
        </li>

        <li className="hidden md:inline-block">
          {user ? (
            <LinkCustom to="account/favorites">
              <Icon draw={SVGDrawPaths.favorites} hover="hover:fill-lime-500" />
            </LinkCustom>
          ) : (
            <LinkCustom to="/login">
              <Icon draw={SVGDrawPaths.favorites} hover="hover:fill-lime-500" />
            </LinkCustom>
          )}
        </li>

        <li className="m-0 hidden md:inline-block">
          {user ? (
            <UserAccountDropdown>
              <div className="rounded-full">
                {avatar ? (
                  <img
                    className="h-6 w-6 rounded-full hover:scale-105"
                    src={user.user_metadata.avatar}
                    alt={`${user.user_metadata.firstName} ${user.user_metadata.lastName} user avatar`}
                  />
                ) : (
                  <Icon draw={SVGDrawPaths.account} />
                )}
              </div>
            </UserAccountDropdown>
          ) : (
            <NonUserAccountDropdown>
              <Icon draw={SVGDrawPaths.account} />
            </NonUserAccountDropdown>
          )}
        </li>

        <li>
          {cart ? (
            <div className="mr-2 pt-1">
              <Badge count={numItems} size="medium" color="green">
                <button className="ml-3 mt-[6px] md:ml-0 " onClick={showDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
                  </svg>
                </button>
              </Badge>
            </div>
          ) : (
            <button className="ml-3 mt-[6px] md:ml-0" onClick={showDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
              </svg>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
