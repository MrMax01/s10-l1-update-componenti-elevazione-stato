import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
    saveAsin: "",
  };

  render() {
    const book = this.props.book;
    return (
      <Card
        onClick={() => {
          this.props.setBookSelected(book);
          this.setState({ selected: !this.state.selected, saveAsin: book.asin });
        }}
        className={this.state.selected ? "selected" : ""}
      >
        <Card.Img variant="top" src={book.img} height={300} className="object-fit-cover" />
        <Card.Body>
          <Card.Title className="noCapo">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
  //   console.log(prop);
}
export default SingleBook;
