import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";

export default function NewCard({ newData }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={newData.image_url}
          alt="green iguana"
        />
        <CardContent>
          <a
            href={newData.source_url}
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
            <i>
              Last updated on <b>{moment(newData.timestamp).format("lll")}</b>
            </i>
          </small>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
