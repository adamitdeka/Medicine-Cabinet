import { useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Store } from "../store/Store";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addNotes } from "../store/Actions";
function CabinetDrug() {
  const { state, dispatch } = useContext(Store);
  const [note, setNote] = useState("");
  const [params] = useSearchParams();
  const id = params.get("id");

  let notes = state.cabinetDrugs.map((item, index) => {
    let tempNotes;
    if (item.id === id) {
      if (item.notes && item.notes.length > 0) {
        tempNotes = item.notes.map((item, index) => {
          return <li key={index}>{item}</li>;
        });
      }
    }
    return tempNotes;
  });

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes({ id: id, notes: note }, dispatch);
    console.log(notes);
  };

  return (
    <Container style={{ margin: "1em" }}>
      <Row>
        <Col>
          <strong>Previous Notes:</strong>
          <ul>{notes.length > 0 ? notes : "No notes entered"}</ul>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              as="textarea"
              placeholder="Leave a note here"
              style={{ height: "100px" }}
              onChange={handleChange}
            />
            <Button type="submit" style={{ marginTop: "1em" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CabinetDrug;
