import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";

export default function NewCard({ newData }) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={newData.image}
          alt="green iguana"
        />
        <CardContent>
          <a
            href={newData.read_more}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Typography gutterBottom variant="h5" component="div">
              {newData.title}
            </Typography>
          </a>
          <Typography variant="body2" color="text.secondary">
            {newData.description}
          </Typography>
          <small className="text-muted">
            Last updated on {moment(newData.timestamp).format("lll")}
          </small>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
