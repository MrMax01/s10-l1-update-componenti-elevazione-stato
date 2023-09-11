import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class FilmList extends Component {
  render() {
    const books = this.props.books;
    return (
      <Container>
        <Row xs={1} md={2} lg={3}>
          {books.map((book) => (
            <div className="col mb-3" key={book.asin}>
              <SingleBook book={book} setSelectedBook={this.props.setSelectedBook} />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmList;
