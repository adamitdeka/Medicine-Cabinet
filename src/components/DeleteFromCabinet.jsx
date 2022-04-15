import { useContext } from "react";
import { Button } from "react-bootstrap";
import { removeDrug } from "../store/Actions";
import { Store } from "../store/Store";

function DeleteFromCabinet(props) {
  const { dispatch } = useContext(Store);
  return (
    <Button
      variant="danger"
      size="sm"
      onClick={() => {
        removeDrug(props.id, dispatch);
      }}
    >
      Remove From Cabinet
    </Button>
  );
}

export default DeleteFromCabinet;
