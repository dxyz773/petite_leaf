import { shipping } from "../utils/helperData";
import AccordianRow from "../ui/AccordianRow";

function Shipping() {
  return (
    <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-40 pl-5 pt-20 font-serif leading-7 tracking-wider text-neutral-950 sm:pl-8 sm:pr-6 md:pl-7">
      <h2 className="mb-6 text-3xl font-semibold">Shipping Policy:</h2>
      <div>
        <p className="mb-4 mt-12 px-4 text-[15px] md:mb-6 md:px-10 lg:ml-2 lg:mr-28 xl:ml-28 xl:mr-48">
          At Petite Leaf, we strive to provide the utmost care and attention to
          ensure that your botanical treasures arrive safely and promptly to
          your doorstep. Here's what you can expect from our shipping process:
        </p>
        <div className="max-w-[900px] py-9 md:ml-8 md:mr-8 lg:mr-16 xl:ml-32">
          {shipping.map((policy) => (
            <AccordianRow
              key={policy.text}
              title={policy.title}
              text={policy.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shipping;
