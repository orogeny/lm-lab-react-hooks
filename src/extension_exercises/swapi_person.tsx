import useFetch from "./use_fetch";

type SwapiResponse = {
  name: string;
  birth_year: string;
};

const IMAGE_URL = "https://starwars-visualguide.com/assets/img/characters";
const STATS_URL = "https://swapi.dev/api/people";

function SwapiPerson({ id }: { id: number }) {
  const {
    isLoading: loadingStats,
    payload: stats,
    error: statsError,
  } = useFetch<SwapiResponse>(`${STATS_URL}/${id}`);

  return (
    <>
      <img src={`${IMAGE_URL}/${id}.jpg`} />

      {loadingStats && <p>Loading stats...</p>}
      {statsError && <p>Stats: Unavailable</p>}
      {stats && (
        <div>
          <h3>Stats</h3>
          <p>
            <strong>Name: </strong>
            {stats?.name}
          </p>
          <p>
            <strong>Birth Year: </strong>
            {stats?.birth_year}
          </p>
        </div>
      )}
    </>
  );
}

export default SwapiPerson;
