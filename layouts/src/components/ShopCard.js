
function ShopCard (props) {
    const {project} = props;
  console.log(project)
  
    return (

      <div className="card_module">
      <div className="card_content_module">
        <img className="card_img_module" alt="boots" src={project.img} />
        <div className="card_title_module">{project.name}</div>
        <div className="card_color_module">{project.color}</div>

        <div className="card_text_module">${project.price}</div>
        <button className="card_add_btn_module">add card</button>
      </div>
    </div>

    );
  }
  
  export default ShopCard ;