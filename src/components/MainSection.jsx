import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilmList from "./FilmList";
import CommentArea from "./CommentArea";

class MainSection extends Component() {
  state = {
    book: null,
  };
  setBookSelected = (bookSelected) => {
    this.setState({ book: bookSelected });
    console.log(this.state.book);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={8}>
            <FilmList books={this.props.books} setBookSelected={this.setBookSelected} />
          </Col>
          <Col xs={4}>
            <CommentArea />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MainSection;
