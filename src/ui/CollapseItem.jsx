import Icon from "./Icon";
import { filterSVGPaths } from "../utils/helperData";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSearchParams } from "react-router-dom";

function CollapseItem({ categoryChoiceId, name, text }) {
  const formattedText = text.charAt(0).toUpperCase().concat(text.slice(1));

  const [searchParams, setSearchParams] = useSearchParams();

  const formattedFilterField = name?.replaceAll("_", "-");

  const searchParamText = `${text
    .replaceAll(",", "")
    .replaceAll(" ", "-")
    .replaceAll("---", "-")
    .replaceAll("$", "")
    .toLowerCase()}-of-${categoryChoiceId}`;

  const isActive =
    searchParams.get(formattedFilterField) === searchParamText ? true : false;

  function handleClick(value) {
    if (searchParams.get(formattedFilterField) === value) {
      searchParams.delete(formattedFilterField, value);
    } else if (
      searchParams.get(formattedFilterField) !== value &&
      !searchParams.get(formattedFilterField)
    ) {
      searchParams.set(formattedFilterField, value);
    } else if (
      searchParams.get(formattedFilterField) !== value &&
      searchParams.get(formattedFilterField)
    ) {
      return;
    }
    setSearchParams(searchParams);
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
