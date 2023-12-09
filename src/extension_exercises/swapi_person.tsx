import useFetch from "./use_fetch";

type SwapiResponse = {
  name: string;
  birth_year: string;
};

// const SWAPI_PERSON_IMAGE_URL = "https://starwars-visualguide.com/assets/img";
const STATS_URL = "https://swapi.dev/api/people";

function SwapiPerson({ id }: { id: number }) {
  const {
    isLoading: loadingStats,
    payload: stats,
    error: statsError,
  } = useFetch<SwapiResponse>(`${STATS_URL}/${id}`);

  return (
    <>
      {loadingStats && <p>Loading stats...</p>}
      {statsError && <p>Stats: Unavailable</p>}
      {stats && (
        <div>
          <h3>Stats</h3>
          <p>Name: {stats?.name}</p>
          <p>Birth Year: {stats?.birth_year}</p>
        </div>
      )}
    </>
  );
}

export default SwapiPerson;
