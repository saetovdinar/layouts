import   IconList from '../svg/view_list.svg'
import   IconModule from '../svg/view_module.svg'

function IconSwitch(props) {

    const {icon, onSwitch  } = props;
  
    return (
      <div className="icon_cont">
            {
                icon === 'view_list' ?
                <img onClick={onSwitch} className='icon' src={IconList} />
                :
                <img onClick={onSwitch} className='icon' src={IconModule} />
            }
         
      </div>
    );
  }
  
  export default IconSwitch;
  