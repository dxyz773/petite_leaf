import CollapseItem from "./CollapseItem";
import Loading from "./Loading";
import FormGroup from "@mui/material/FormGroup";

function Collapse({ title, category, isLoading }) {
  const titleLowercase = title?.toLowerCase().replaceAll(" ", "_");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="collapse collapse-arrow rounded-none border-b border-b-neutral-300 bg-base-200">
      <input type="checkbox" defaultChecked />
      <div className="text-normal font-sm collapse-title">
        {title.replaceAll("_", " ")}
      </div>

      <div className="collapse-content text-sm">
        <FormGroup>
          {category
            ?.sort((a, b) => a.id - b.id)
            .map((curr) => (
              <CollapseItem
                key={curr.description}
                categoryChoiceId={curr.id}
                name={titleLowercase}
                text={curr.description}
              />
            ))}
        </FormGroup>
      </div>
    </div>
  );
}

export default Collapse;
