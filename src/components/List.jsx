import ListItem from "./ListItem";
import { Table } from "react-bootstrap";
function List(props) {
  let drugs;
  if (typeof props.data === "string") {
    drugs = props.data;
  } else {
    drugs = props.data.map((item, index) => {
      return (
        <ListItem
          key={index}
          data={item}
          type={props.type}
          updateData={props.updateData}
        />
      );
    });
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Drug Name</th>
          <th>Manufacturer Name</th>
          {props.type === "cabinet" ? <th>Count</th> : ""}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{drugs}</tbody>
    </Table>
  );
}

export default List;
