import { Link } from "react-router-dom";
import Icon from "./Icon";
import LinkCustom from "./LinkCustom";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className=" bg-green-900 text-neutral-300">
      <footer className="footer bg-base-200 p-10 font-serif tracking-wider text-base-content">
        <nav>
          <h6 className="footer-title">Customer Service</h6>

          <LinkCustom to="/faq" type="footer" text="FAQ" />
          <LinkCustom to="/shipping" type="footer" text="Shipping" />
          <LinkCustom to="/return-policy" type="footer" text="Return Policy" />
          <LinkCustom to="/blog" type="footer" text="Plant Blog" />
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <LinkCustom to="/our-story" type="footer" text="Our Story" />
          <LinkCustom
            to="/leaf-mental-wellness"
            type="footer"
            text="Leaf + Mental Wellness"
          />

          <address>
            <a
              href="mailto:hello@petiteleaf.com"
              className="link-hover link underline-offset-4"
            >
              Contact Us
            </a>
          </address>
        </nav>
        <nav>
          <h6 className="footer-title">Compliance</h6>
          <LinkCustom to="/terms-of-use" type="footer" text="Terms of Use" />
          <LinkCustom
            to="/privacy-policy"
            type="footer"
            text="Privacy Policy"
          />
          <LinkCustom to="/cookie-policy" type="footer" text="Cookie policy" />
        </nav>
        <form>
          <h6 className="footer-title">Let&apos;s Grow Together</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text mb-2">
                Join the Petite Leaf community to receive exclusive offers
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-md join-item input-bordered rounded-none border border-black bg-[#fff] "
              />
              <button className="btn join-item rounded-none border bg-lime-500 font-normal text-neutral-950 hover:bg-lime-500 ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer items-center bg-neutral p-4 text-neutral-content">
        <aside className="grid-flow-col items-center">
          <Link to="/">
            <Icon
              draw="M221.45,40.19a6,6,0,0,0-5.64-5.64C140.43,30.11,80.14,52.71,54.53,95c-17.44,28.79-16.76,62.8,1.79,96.2L35.76,211.76a6,6,0,1,0,8.48,8.48L64.8,199.68c17.27,9.59,34.7,14.41,51.49,14.41A85.38,85.38,0,0,0,161,201.47C203.29,175.86,225.88,115.57,221.45,40.19Zm-66.66,151c-24.08,14.58-52.64,14.37-81.13-.39l90.59-90.59a6,6,0,0,0-8.48-8.48L65.18,182.34c-14.76-28.49-15-57-.39-81.13,22.68-37.43,76.63-57.8,145-54.95C212.59,114.58,192.22,168.54,154.79,191.21Z"
              iconType="phosphor"
              height={20}
              width={20}
              className=" rotate-6 fill-neutral-100 hover:cursor-pointer hover:fill-lime-400"
            />
          </Link>
          <p className="font-serif tracking-wide">
            Copyright &copy; {` ${currentYear} - Petite Leaf`}
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
