import "../styles/projects.css";
import {useState, useEffect} from "react";
import Loading from "../comps/loading"

const Projects = () =>
{

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    console.log("username is: ", username);

    useEffect(() => {
        const fetchRepos = async () =>
        {
            if (!username) {
                console.log("no github username");
                return;
            }
            const url = `https://api.github.com/users/${username}/repos`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setRepos(data);
                setLoading(false);
            } catch (error)
            {
                setError(error);
                setLoading(false);
            }
        };
        fetchRepos();
    }, [username]);

    if (error) return <div>Error fetching repositories: {error.message}</div>;

    return (
        <div id="projects">
            {loading ? null : <h1>My GitHub Projects</h1>}
            <div id="project-container">
                {loading ? (
                    <Loading />
                ) : repos.length > 0 ? (
                    repos.map(repo => (
                        <div key={repo.id} className="project">
                            <h3>
                                <a className="project-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h3>
                            <p>{repo.description || 'No description available.'}</p>
                            <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 👁️ {repo.watchers_count}</p>
                        </div>
                    ))
                ) : (
                    <div>No repositories found.</div>
                )}
            </div>
        </div>
    );
};

export default Projects;