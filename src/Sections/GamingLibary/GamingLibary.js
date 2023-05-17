import './GamingLibary.css'
import SectionHeader from '../../Component/SectionHeader/SectionHeader';
import Sectionwrapper from '../../Component/Sectionwrapper/Sectionwrapper';
import GamingLibaryData from '../../Data/GamingLibaryData';
import GamingLibaryCard from '../../Component/GamingLibaryCard/GamingLibaryCard';

const GamingLibary = () => {

    const cards = GamingLibaryData.map(card => {
        return <GamingLibaryCard key={card.id} image={card.image} title={card.title} 
                                 category={card.category} date={card.date}
                                 hours={card.hours} Currently={card.Currently}/>
    })


    return (
        <div>
        <Sectionwrapper>
       <SectionHeader>Gaming Libary</SectionHeader>
        <div className='gaming-libary-cards'>
        {cards}  
        </div>
        </Sectionwrapper>
    </div>
    );
}

export default GamingLibary;
