import { SecondaryButton } from '../Buttons/Buttons';
import './GamingLibaryCard.css'

const GamingLibaryCard = (props) => {
    return (
        <div className='gaming-libary-card'>
            <ul>
                <li><img src={props.image} alt=""/></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>Date Added</h4><span>{props.date}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours}</span></li>
                <li><h4>Currently</h4><span>{props.Currently}</span></li>
                <SecondaryButton>download</SecondaryButton>
            </ul>
        </div>
    );
}

export default GamingLibaryCard;
