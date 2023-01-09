import React from "react";

import * as NBAIcons from "react-nba-logos";

export const teamMap = {
  ATL: NBAIcons.ATL,
  BKN: NBAIcons.BKN,
  BOS: NBAIcons.BOS,
  CHA: NBAIcons.CHA,
  CHI: NBAIcons.CHI,
  CLE: NBAIcons.CLE,
  DAL: NBAIcons.DAL,
  DEN: NBAIcons.DEN,
  DET: NBAIcons.DET,
  GSW: NBAIcons.GSW,
  HOU: NBAIcons.HOU,
  IND: NBAIcons.IND,
  LAC: NBAIcons.LAC,
  LAL: NBAIcons.LAL,
  MEM: NBAIcons.MEM,
  MIA: NBAIcons.MIA,
  MIL: NBAIcons.MIL,
  MIN: NBAIcons.MIN,
  NOP: NBAIcons.NOP,
  NYK: NBAIcons.NYK,
  OKC: NBAIcons.OKC,
  ORL: NBAIcons.ORL,
  PHI: NBAIcons.PHI,
  PHX: NBAIcons.PHX,
  POR: NBAIcons.POR,
  SAC: NBAIcons.SAC,
  SAS: NBAIcons.SAS,
  TOR: NBAIcons.TOR,
  UTA: NBAIcons.UTA,
  WAS: NBAIcons.WAS
};

export type TeamAbbreviation = keyof typeof teamMap;

interface Props {
  team: TeamAbbreviation;
  size?: number;
}

const Logo = ({ team, size = 40 }: Props) => {
  return React.createElement(teamMap[team], { size });
};

export type LogoType = ReturnType<typeof Logo>;

export default Logo;
