import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    review: {
      name: "",
      rate: "",
      comment: "",
      idBook: "",
    },
  };

  render() {
    return (
      <Form onSubmit={(event) => {}}>
        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name..."
            value={this.state.review.name}
            onChange={(event) => this.handleChange("name", event.target.value)}
            required
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select"
          value={this.state.review.rate}
          onChange={(event) => this.handleChange("rate", event.target.value)}
          required
        >
          <option value="">rate us...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.review.comment}
            onChange={(event) => this.handleChange("comment", event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default CommentArea;
