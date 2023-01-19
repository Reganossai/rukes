import axios from "axios";
import { useEffect, useCallback, useState } from "react";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        "https://api.football-data.org/v2/teams/67/matches?status=SCHEDULED&limit=1",
        {
          headers: {
            "X-Auth-Token": "24b6711002744c65a971e59d3f9f36b1",
          },
        }
      );
      setMatches(res.data.matches);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBck();
  }, [callBck]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  return (
    <div>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
