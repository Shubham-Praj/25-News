import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import moment from "moment";

function NewsCards({ newdata }) {
  return (
    <div className="cardHolder">
      <Card className="InLayoutCard">
        <CardImg
          style={{ maxHeight: "300px" }}
          alt="Image"
          src={newdata.image}
          top
        />
        <CardBody>
          <a
            href={newdata.read_more}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel = "noreferrer"
          >
            <CardTitle tag="h5">{newdata.title}</CardTitle>
          </a>
          <CardText>{newdata.description}</CardText>
          <CardText>
            <small className="text-muted">
              Last updated on {moment(newdata.timestamp).format('lll')}
            </small>
            <br/>
            <b>
              <small className="text-muted">{newdata.author}</small>
            </b>
            <br />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default NewsCards;
