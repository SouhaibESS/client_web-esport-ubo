import React, { useEffect } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "./gameSlice";
import { fetchLeagues, fetchLeaguesByGame } from "../leagues/leaguesSlice";

export default function GamesSelectBox() {
  const games = useSelector((state) => state.game.games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value == "all") {
      dispatch(fetchLeagues());
    } else {
      dispatch(fetchLeaguesByGame(value));
    }
  };

  return (
    <FormControl
      style={{
        color: "white",
        border: "1px solid rgba(255, 255, 255, 1)",
        borderRadius: 5,
        height: "100%",
      }}
      sx={{ m: 1, minWidth: 120 }}
    >
      <Select
        onChange={handleChange}
        style={{ height: "25px", margin: "auto 0", color: "white" }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="all">All Games</MenuItem>
        {games &&
          games.map((g, key) => (
            <MenuItem key={key} value={g.id}>
              {g.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
