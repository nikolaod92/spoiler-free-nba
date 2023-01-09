import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Game } from "./types";
import { Badge, Stack, Text } from "@chakra-ui/react";
import GameInfo from "./components/GameInfo/GameInfo";
import DatePickerContainer from "./components/DatePicker/DatePickerContainer";
import { sortGames } from "./utils";
import Loader from "./components/Loader/Loader";

function App() {
  const [games, setGames] = useState<Game[] | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGames([]);
    setLoading(true);

    const date = format(startDate!, "yyyy-MM-dd");
    fetch(`https://www.balldontlie.io/api/v1/games?dates[]=${date}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setGames(data);
        setLoading(false);
      });
  }, [startDate]);

  const sortedGames = sortGames(games);

  return (
    <Stack alignItems="center" mt={4} mb={12} w={{ base: "lg", md: "4xl" }} mx="auto">
      <DatePickerContainer date={startDate} setDate={(date) => setStartDate(date)} />
      {!loading ? (
        <>
          <Badge
            fontSize="0.8em"
            color="gray.600"
            w={24}
            textAlign="center"
            colorScheme={games?.length ? "gray" : "red"}
          >
            {games?.length} games
          </Badge>
          <Stack spacing={2}>
            {sortedGames?.map((game) => (
              <GameInfo key={game.id} game={game} />
            ))}
          </Stack>
        </>
      ) : (
        <Loader />
      )}
    </Stack>
  );
}

export default App;
