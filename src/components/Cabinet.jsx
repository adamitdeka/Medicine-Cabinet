import React, { useContext } from "react";
import { Store } from "../store/Store";
import List from "./List";

function Cabinet() {
  const { state } = useContext(Store);
  return <List data={state.cabinetDrugs} type="cabinet" />;
}

export default Cabinet;
