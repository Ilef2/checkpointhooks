import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ mov }) => {
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={mov.posterURL} />
        <Card.Body>
          <Card.Title>{mov.title}</Card.Title>
          <Card.Text>{mov.description}</Card.Text>

          <Rating initialValue={mov.rate} readonly />
        </Card.Body>
      </Card>
      <hr></hr>
    </div>
  );
};

export default MovieCard;
