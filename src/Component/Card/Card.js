import './Card.css'
import { BsFillStarFill , BsDownload} from "react-icons/bs";


const Card = (props) => {
    return (
             <div className='Most-Popular-item'>
            <div className='card-Wrapper'>
                <img className='Most-Popular-item-image' src={props.image} />
                <div className='Most-Popular-item-content'>
                    <h4 className='Most-Popular-item-title'>
                    {props.title} <br />
                    <span>{props.category}</span>
                    </h4>
                    <ul>
                        
                        <li><span style={{"color":"yellow" ,"margin-right":"5px"}}>  <BsFillStarFill/> </span><span>{props.rate}</span></li>
                        <li><span style={{"color":"#ec6090" ,"margin-right":"5px"} }>  <BsDownload/> </span><span>{props.download}</span></li>

                    </ul>
          
                </div>
            </div>
            </div>
    );
}

export default Card;
