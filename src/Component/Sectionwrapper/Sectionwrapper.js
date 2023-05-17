import './Sectionwrapper.css';

const Sectionwrapper = (props) => {
    return (
        <div className='section-Wrapper'>
            {props.children}
        </div>
    );
}

export default Sectionwrapper;
