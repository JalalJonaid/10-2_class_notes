import CardImage from "./CardImage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MagicCard = (props) => {
  const { name, imageUrl, originalText, originalType, color } = props.card;
  const setSelectedCard = props.setSelectedCard;
  // short circuit
  // if no value is passed props.imageWidth is 'undefined'
  const imageWidth = props.imageWidth || "150px";

  const handleClick = (e) => {
    const cardName = e.target.id;
    // this is our ENTIRE CARD OBJECT from our cards array
    const selectedCard = props.displayedCards.find((card) => {
      return card.name === cardName;
    });
    // this function is still wired up to update the state in APP
    // app then passes it to MainDisplay and we see the update
    // lifting state
    setSelectedCard(selectedCard);
  };

  return (
    <Card style={{ width: "250px" }}>
      <Card.Img variant="top" src={ imageUrl }/>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{originalType}</Card.Subtitle>
      <Card.Text>{originalText}</Card.Text>
      <Card.Body>
        <Button variant="primary" id={name} onClick={handleClick}>
          Select Card
        </Button>
      </Card.Body>
    </Card>
    // <div className="card-container">
    //   <div className="card-body">
    //    <CardImage imageUrl={ imageUrl } imageWidth = { imageWidth }/>
    //     <div className="card-text">
    //       <h2>{ name }</h2>
    //       <h3>{ originalType }</h3>
    //       <p>{ originalText }</p>
    //       <button id={ name }  onClick={ handleClick }>select</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MagicCard;
