import './MostPopular.css';
import Card from '../../Component/Card/Card';
import SectionHeader from '../../Component/SectionHeader/SectionHeader';
import Sectionwrapper from '../../Component/Sectionwrapper/Sectionwrapper';
import MostPopularData from '../../Data/MostPopularData';


const MostPopular = () => {


const cards = MostPopularData.map(card => {
        return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })


    return (
        <div>
            <Sectionwrapper>
           <SectionHeader>Most Popular</SectionHeader>
            <div className='Most-Popular-items '>
            {cards}
            </div>
            </Sectionwrapper>
        </div>
    );
    }

export default MostPopular;
