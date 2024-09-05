
function ShopCard (props) {
    const {projects} = props;
    console.log(projects)
  
    return (
      <div>
          {
            projects.map(function (item) {
                return (
                   
                  
                    <img src={item.img} className=""/>
                        
                 
                    
                )
            }
            )
          }
      </div>
    );
  }
  
  export default ShopCard ;