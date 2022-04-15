import AddToCabinet from "./AddToCabinet";
import DeleteFromCabinet from "./DeleteFromCabinet";
function ListItem(props) {
  const { id, brand_name, manufacturer_name } = props.data;
  const action =
    props.type === "cabinet" ? (
      <DeleteFromCabinet id={id} />
    ) : (
      <AddToCabinet data={props.data} />
    );
  const displayCount =
    props.type === "cabinet" ? <td>{props.data && props.data.count}</td> : "";

  //
  return (
    <tr>
      <td>{brand_name}</td>
      <td>{manufacturer_name}</td>
      {displayCount}
      <td>{action}</td>
    </tr>
  );
}

export default ListItem;
