import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function LeagueCard({league}) {
  return (
    <Card sx={{ minWidth: 345, width: 600 }} style={{ margin: "30px" }} >
      <CardActionArea onClick={() => {console.log("clicked!")}}>
        <CardMedia
          component="img"
          height="140"
          image={league && league.image_url}
          alt="league picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
			  {league && league.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
