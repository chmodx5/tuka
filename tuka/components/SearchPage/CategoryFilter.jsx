import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Slider,
} from "@mui/material";

const CategoryFilter = ({
  category,
  selectedCategories,
  setSelectedCategories,
}) => {
  //   handling the category check input
  const handleCheckEvent = (e, categoryid) => {
    let somearray = [...selectedCategories];
    if (e.target.checked === true) {
      let filtered = category.filter((item) => item.id === categoryid)[0];
      somearray.push(filtered);
      setSelectedCategories(somearray);
      console.log(somearray);
    } else {
      let filtered = category.filter((item) => item.id === categoryid)[0];
      somearray.splice(somearray.indexOf(filtered), 1);
      setSelectedCategories(somearray);
      console.log(somearray);
    }
  };
  return (
    <div className="app__card">
      <h4 className="px-3 font-semibold">Category</h4>
      <List dense>
        {category && category.length > 0 && (
          <>
            {category.map((category) => {
              return (
                <ListItem
                  key={[category.id]}
                  className="hover:bg-primary group hover:text-white"
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      className="group-hover:text-white"
                      onChange={(e) => handleCheckEvent(e, category.id)}
                      inputProps={{ "aria-labelledby": category.name }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText id={category.id}>
                      <span className="text-sm font-sans">
                        <>{category.name}</>
                      </span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </>
        )}
      </List>
    </div>
  );
};

export default CategoryFilter;
