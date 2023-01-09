import { TeamAbbreviation } from "../components/Logo";

export type Game = {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
};

export type Team = {
  id: number;
  abbreviation: TeamAbbreviation;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

export type Player = {
  id: number;
  first_name: string;
  height_feet: number;
  height_inches: number;
  last_name: string;
  position: string;
  team_id: number;
  weight_pounds: number;
};

export type Stats = {
  id: number;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  game: Game;
  min: string;
  oreb: number;
  pf: number;
  player: Player;
  pts: number;
  reb: number;
  stl: number;
  team: Team;
  turnover: number;
};

export type Averages = {
  games_played: number;
  player_id: number;
  season: number;
  min: string;
  fgm: number;
  fga: number;
  fg3m: number;
  fg3a: number;
  ftm: number;
  fta: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  turnover: number;
  pf: number;
  pts: number;
  fg_pct: number;
  fg3_pct: number;
  ft_pct: number;
};
