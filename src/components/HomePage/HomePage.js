import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    const [joke, setJoke] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.chucknorris.io/jokes/random`
                );
                const data = await response.json();
                setJoke(data);
            } catch (err) {
                console.log("ERROR:", err.message);
            }
        };
        isLoading && fetchData();
    }, [isLoading]);

    return (
        <div className={styles.homePage}>
            <h1>Chuck Load o'Shea</h1>
            <button onClick={() => setIsLoading(false)}>
                Get a new Chuck Norris joke
            </button>
            <div className={styles.jokeBox}>
                {isLoading ? <div>{joke.value}</div> : <div>No fetching</div>}
            </div>
        </div>
    );
};

export default HomePage;
