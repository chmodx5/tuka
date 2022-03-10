import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Drawer } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Cart = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Tooltip title="Cart" placement="bottom" disableInteractive>
        <button className="Navbar__icon-btn" onClick={toggleDrawer(true)}>
          <FiShoppingCart />
        </button>
      </Tooltip>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className=" w-[30em] px-10 py-8">
          <div className="flex justify-between items-center pb-4">
            <h3 className="font-semibold text-2xl">Shopping Cart</h3>
            <button onClick={toggleDrawer(false)} className="text-3xl">
              <FaTimes />
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            omnis aliquid perspiciatis delectus quaerat quam veritatis unde
            dolore, ex amet, suscipit id quod facere doloremque ab! Sed maxime
            laudantium voluptas.
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
