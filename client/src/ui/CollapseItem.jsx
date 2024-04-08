import Icon from "./Icon";
import { filterSVGPaths } from "../utils/helperData";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSearchParams } from "react-router-dom";

function CollapseItem({ categoryChoiceId, name, text }) {
  const formattedText = text.charAt(0).toUpperCase().concat(text.slice(1));

  const [searchParams, setSearchParams] = useSearchParams();

  const formattedFilterField = name?.replaceAll("_", "-");
  // console.log(formattedFilterField);
  const searchParamText = `${text
    .replaceAll(",", "")
    .replaceAll(" ", "-")
    .replaceAll("---", "-")
    .replaceAll("$", "")
    .toLowerCase()}-of-${categoryChoiceId}`;

  const isActive =
    searchParams.get(formattedFilterField) === searchParamText ? true : false;

  function handleClick(value) {
    // console.log({ [`${name}_id`]: categoryChoiceId });
    if (searchParams.get(formattedFilterField) === value) {
      searchParams.delete(formattedFilterField, value);
    } else if (
      searchParams.get(formattedFilterField !== value) ||
      !searchParams.get(formattedFilterField)
    ) {
      searchParams.set(formattedFilterField, value);
    } else if (
      searchParams.get(formattedFilterField !== value) ||
      searchParams.get(formattedFilterField)
    ) {
      return;
    }
    setSearchParams(searchParams);
    // setChecked((prev) => !prev);

    // setChecked((prev) => !prev);
    // setChecked((prev) => !prev);
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color="success"
          checked={isActive}
          onClick={() => handleClick(searchParamText)}
          name={name}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={
        <div className="flex gap-1">
          <Icon
            iconType={filterSVGPaths[name][categoryChoiceId].iconType}
            draw={filterSVGPaths[name][categoryChoiceId].path}
            hover="fill-lime-600"
            width="18px"
          />
          <span className="font-serif tracking-wide">{formattedText}</span>
        </div>
      }
    />
  );
}

export default CollapseItem;

// INITIAL VERSION w/o Material UI

{
  /* <div className="flex gap-3">
<input
  // defaultChecked={activeChoice === text ? "checked" : false}
  type="checkbox"
  checked={checked}
  value={categoryChoiceId}
  name={name}
  id={name + categoryChoiceId + name}
  onChange={(e) => {
    handleClick(e);
  }}
  className="rounded-none accent-lime-700"
/>
<div className="flex gap-[5px]">
  <Icon
    iconType={filterSVGPaths[name][categoryChoiceId].iconType}
    draw={filterSVGPaths[name][categoryChoiceId].path}
    hover="fill-lime-600"
    width="18px"
  />
  <label name={name} className="hover:underline hover:underline-offset-2">
    {formattedText}
  </label>
</div>
</div> */
}
