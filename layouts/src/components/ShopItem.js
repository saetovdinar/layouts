
function ShopItem (props) {
    const {project} = props;

  
    return (

        <div className="card_list">
          <div className="card_content_list">
            <img className="card_img_list" alt="boots" src={project.img} />
            <div className="card_title_list">{project.name}</div>
            <div className="card_color_list">{project.color}</div>

            <div className="card_text_list">${project.price}</div>
            <button className="card_add_btn_list">add card</button>
          </div>
        </div>

    );
  }
  
  export default ShopItem ;