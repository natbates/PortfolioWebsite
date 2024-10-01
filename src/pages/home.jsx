import "../styles/home.css";
import SocialLinks from "../comps/socialLinks";

const Home = () =>
{
    return(
        <div id = "home">
            <h1 id = "name">Gwapes 🍇</h1>
            <p>20 year old physics student from the United Kingdom.</p>
            <SocialLinks/>
        </div>
    );
}

export default Home;