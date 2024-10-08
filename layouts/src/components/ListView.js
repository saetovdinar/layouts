import ShopItem from "./ShopItem";

function ListView (props) {
    const {cards} = props;
   
  
    return (
      <div className="cards_list">
        {
            cards.map(function (item) {
                return (
                    <ShopItem project={item}/>
                )
            })
        } 
      </div>
    );
  }
  
  export default ListView ;
  