import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FeaturedPhoto({
  url,
  divStyle,
  titleStyle,
  title,
  btnStyle,
  btnColor,
  btnText,
  navPath,
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url('./${url}')`,
      }}
      className={divStyle}
    >
      <h1 className={titleStyle}>{title}</h1>
      <Button
        variant="contained"
        color={btnColor}
        style={btnStyle}
        onClick={() => navigate(`/${navPath}`)}
      >
        {btnText}
      </Button>
    </div>
  );
}

export default FeaturedPhoto;
