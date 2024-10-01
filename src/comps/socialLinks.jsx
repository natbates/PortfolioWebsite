import "../styles/socialLinks.css";
import { ReactComponent as DiscordIcon } from '../svgs/discord-svgrepo-com.svg'; 
import { ReactComponent as GithubIcon } from '../svgs/github-square-svgrepo-com.svg'; 
import { ReactComponent as LinkedInIcon } from '../svgs/linked-in-logo-of-two-letters-svgrepo-com.svg'; 


const SocialLinks = () =>
{

    return (
        <div className="social-container">

            <a href = "/" target="_blank"><DiscordIcon className = "svg"/></a>
            <a href = "/" target="_blank"><GithubIcon className = "svg"/></a>
            <a href = "/" target="_blank"><LinkedInIcon className = "svg"/></a>
        </div>
    );
}

export default SocialLinks;