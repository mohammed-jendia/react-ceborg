import './Home.css'
import Hero from '../../Sections/Hero/Hero';
import MostPopular from '../../Sections/MostPopular/MostPopular';
import GamingLibary from '../../Sections/GamingLibary/GamingLibary';

const Home = () => {
    return (
        <div>
            <Hero/>
            <MostPopular/>
            <GamingLibary/>
        </div>
    );
}

export default Home;
