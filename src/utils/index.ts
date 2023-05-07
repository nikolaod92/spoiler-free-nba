import { TeamAbbreviation } from "../components/ui/Logo";
import { Game, Stats } from "./../types/index";

export const isTripleDouble = (...stats: number[]) => {
  let count = 0;

  stats.forEach((stat) => {
    if (stat >= 10) count++;
  });

  if (count >= 3) return true;
  return false;
};

export const gameScore = (stats: Stats): number => {
  const { pts, fga, fgm, fta, ftm, oreb, dreb, stl, ast, blk, pf, turnover } = stats;

  return Math.round(
    pts +
      fgm * 0.4 -
      fga * 0.7 -
      (fta - ftm) * 0.4 +
      oreb * 0.7 +
      dreb * 0.3 +
      stl +
      ast * 0.7 +
      blk * 0.7 -
      pf * 0.4 -
      turnover
  );
};

export const winner = (game: Game): TeamAbbreviation => {
  const {
    home_team_score,
    visitor_team_score,
    home_team: { abbreviation: homeAbbr },
    visitor_team: { abbreviation: awayAbbr }
  } = game;
  return home_team_score > visitor_team_score ? homeAbbr : awayAbbr;
};

export const isBlowout = (home: number, away: number) => {
  return Math.abs(home - away) > 10;
};

export const hitTheOver = (home: number, away: number) => {
  return home + away > 220 ? "Yes" : "No";
};

const statusToTime = (status: string) => {
  return +status.replace(/ PM ET|:/g, "");
};

const gameRating = (game: Game) => {
  const { home_team_score, visitor_team_score } = game;
  return home_team_score + visitor_team_score - Math.abs(home_team_score - visitor_team_score) * 10;
};

export const sortGames = (games: Game[] | null) => {
  if (!games) return [];

  if (games.some((game) => game.period === 4)) {
    return games.sort((a, b) => a.id - b.id);
  } else {
    return games.sort((a, b) => statusToTime(a.status) - statusToTime(b.status));
  }
};
