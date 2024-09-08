import IconSwitch from "./IconSwitch";
import CardsView  from "./CardsView";
import ListView  from "./ListView";

import { useState } from "react";

function Store(props) {
  const [icon, setIcon] = useState("view_list")
  const {products} = props;

  return (
    <>
      <IconSwitch icon={icon} onSwitch={(event) => {
        icon === 'view_list'? setIcon('view_module') :  setIcon('view_list')
       
      }}/>
      {
        icon === 'view_module' ? <ListView cards={products}  /> : <CardsView cards={products}  />
      }

    </>
  );
}

export default Store;
