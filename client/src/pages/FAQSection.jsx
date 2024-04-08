import AccordianRow from "../ui/AccordianRow";
import { faqs } from "../utils/helperData";

function FAQSection() {
  return (
    <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-40 pl-5 pt-20 font-serif leading-7 tracking-wider text-neutral-950 sm:pl-8 sm:pr-6 md:pl-7">
      <h2 className="mb-6 text-3xl font-semibold">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="max-w-[900px] py-9 md:ml-8 md:mr-8 lg:mr-16 xl:ml-32">
        {faqs.map((policy) => (
          <AccordianRow
            key={policy.text}
            title={policy.title}
            text={policy.text}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
