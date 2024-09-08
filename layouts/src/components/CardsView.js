import ShopCard from "./ShopCard";

function CardsView (props) {
    const {cards} = props;
   
  
    return (
      <div className="cards_module">
        {
            cards.map(function (item) {
                return (
                    <ShopCard project={item}/>
                )
            })
        } 
      </div>
    );
  }
  
  export default CardsView ;
  