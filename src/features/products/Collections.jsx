import PageHeader from "../../ui/PageHeader";
import CollectionList from "./CollectionList";

function Collections() {
  return (
    <>
      <PageHeader
        src="jungle-space-BeOI4eQdFCw-unsplash.jpg"
        title="Collections"
        className="mb-[3rem] mr-6 font-serif text-6xl font-semibold text-neutral-50"
      />
      <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-72 pt-16">
        <header className="mb-12 flex justify-center pt-10 font-serif text-2xl font-bold">
          Shop Plant Collections
        </header>
        <p className="my-2 mb-32 pl-8 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:ml-40 lg:mr-40">
          We take pride in offering a meticulously curated selection of
          exquisite plants, each chosen to elevate your space with unparalleled
          beauty and sophistication. Whether you&apos;re seeking lush foliage
          for your urban jungle or statement pieces for your home oasis, our
          carefully crafted collections cater to every discerning plant
          enthusiast. Explore our botanical treasures and embark on a journey of
          luxury and refinement with us.
        </p>

        <div>
          <CollectionList />
        </div>
      </div>
    </>
  );
}

export default Collections;
