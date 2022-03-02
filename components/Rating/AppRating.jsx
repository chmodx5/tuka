import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export default function AppRating() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <div className="">
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarIcon
            className="text-black "
            style={{ opacity: 0.55 }}
            fontSize="inherit"
          />
        }
      />
      {value !== null && <Box sx={{ ml: 2 }}>Based on 4 reviews</Box>}
    </div>
  );
}
