import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Game } from "./types";
import { Badge, Stack, Text, useToast } from "@chakra-ui/react";
import GameInfo from "./components/GameInfo/GameInfo";
import DatePickerContainer from "./components/DatePicker/DatePickerContainer";
import { sortGames } from "./utils";
import Loader from "./components/Loader/Loader";
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
    <Stack alignItems="center" mt={4} mb={12} w={{ base: "lg", md: "4xl" }} mx="auto">
      <DatePickerContainer date={startDate} setDate={(date) => setStartDate(date)} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Badge
            fontSize="0.8em"
            color="gray.600"
            w={24}
            textAlign="center"
            colorScheme={games?.length ? "gray" : "red"}
          ></Badge>
          <Stack spacing={2}>
            {sortedGames?.map((game) => (
              <GameInfo key={game.id} game={game} />
            ))}
          </Stack>
        </>
      )}
      {error.length && <ErrorDisplay message={error} />}
    </Stack>
  );
}

export default App;
