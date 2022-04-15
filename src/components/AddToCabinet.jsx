import { useContext } from "react";
import { Button } from "react-bootstrap";
import { addDrug } from "../store/Actions";
import { Store } from "../store/Store";

function AddToCabinet(props) {
  const { dispatch } = useContext(Store);
  const handleAdd = () => {
    addDrug(props.data, dispatch);
  };
  return (
    <Button variant="primary" size="sm" onClick={handleAdd}>
      Add to Cabinet
    </Button>
  );
}

export default AddToCabinet;
