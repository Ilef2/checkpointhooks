import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
const MovieCard = ({ mov }) => {

  return (
    <div>
     
      <Card classame="card">
     
        <Card.Body>
          <Card.Title>{mov.title}
          </Card.Title>
          <Card.Text>{mov.description}</Card.Text>
          <Rating initialValue={mov.rate} readonly />

          <Link  to={`/detail/${mov.id}`}>
        
        <Card.Img variant="top" src={mov.posterURL} />
        description
        </Link>
        </Card.Body>

      </Card>
    
      <hr></hr>
    </div>
  );
};

export default MovieCard;
