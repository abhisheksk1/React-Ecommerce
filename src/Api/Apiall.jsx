import React, { createContext, useState } from "react";

export const data = createContext();
const Apiall = (props) => {
  const [home, setHome] = useState([
    {
      name: "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
      productId: "EURO19938201",
      brandName: "EUROLINE",
      category: "Pop Up Toasters",
      companyAssured: false,
      rating: "4.2",
      price: "12232",
      discount: "50%",
      imageURL:
        "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
      sellerName: "telform inc.",
      isNewProduct: true
    },
    {
      name: "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
      productId: "EURO19938202",
      brandName: "Morphy",
      category: "Microwave Ovens",
      companyAssured: true,
      rating: "3.9",
      price: "10999",
      discount: "11%",
      imageURL:
        "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
      sellerName: "Kwitch Retails",
      isNewProduct: false
    }
  ]);

  return (
    <div>
      <data.Provider value={[home, setHome]}>{props.children}</data.Provider>
    </div>
  );
};

export default Apiall;
