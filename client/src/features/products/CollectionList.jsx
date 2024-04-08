import CollectionCover from "./CollectionCover";

function CollectionList() {
  return (
    <div className="flex flex-col gap-64 lg:gap-20">
      <CollectionCover
        title="The Pothos Collection"
        side="left"
        url="taylor-heery-Q0geXolSohI-unsplash.jpg"
      />
      <CollectionCover
        title="The Philodendron Collection"
        url="jungle-space-NLQNdS-kVi8-unsplash.jpg"
      />
      <CollectionCover
        title="Bestsellers Collection"
        side="left"
        url="ceyda-ciftci-dDVU6D_6T80-unsplash.jpg"
      />
    </div>
  );
}

export default CollectionList;
