import { useState } from "react";
import { format } from "date-fns";
import { Game } from "./types";
import { Badge, Box, Flex, Stack } from "@chakra-ui/react";
import GameInfo from "./components/GameInfo/GameInfo";
import DatePickerContainer from "./components/ui/DatePicker/DatePickerContainer";
import { sortGames } from "./utils";
import Loader from "./components/ui/Loader/Loader";
import useFetch from "./hooks/useFetch";
import ErrorDisplay from "./components/ui/ErrorDisplay";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const date = format(startDate!, "yyyy-MM-dd");

  const {
    data: games,
    loading,
    error
  } = useFetch<Game[]>(`games?dates[]=${date}`, { timeout: 1000 });

  const sortedGames = sortGames(games);

  return (
    <Stack mt={4} mb={12} w={{ md: "4xl" }} mx='auto'>
      <DatePickerContainer date={startDate} setDate={(date) => setStartDate(date)} />
      {loading ? (
        <Flex justifyContent='center'>
          <Loader />
        </Flex>
      ) : (
        <Stack spacing={2}>
          {sortedGames?.map((game) => (
            <GameInfo key={game.id} game={game} />
          ))}
        </Stack>
      )}
      {error && (
        <Flex justifyContent='center'>
          <ErrorDisplay message={error} />
        </Flex>
      )}
    </Stack>
  );
}

export default App;
