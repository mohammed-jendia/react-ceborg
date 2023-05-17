import './Buttons.css'


const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    );
}

const SecondaryButton = (props) => {
    return (
        <div className='button secondary-btn'>
            {props.children}
        </div>
    );
}

export default PrimaryButton ;
export  {SecondaryButton};