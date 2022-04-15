import React, { useContext, useState, useEffect } from "react";
import { Store } from "../store/Store";
import List from "./List";
import { Container, Form } from "react-bootstrap";
import { getMedicine } from "../service/medicine";
import { addDrugs } from "../store/Actions";

function Home() {
  const { state, dispatch } = useContext(Store);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getMedicine().then((res) => {
      let data = [];
      if (res.status === 200 && res.data.results) {
        res.data.results.forEach((result, index) => {
          let open_fda = result.patient.drug[0].openfda;
          data.push({
            brand_name: open_fda.brand_name[0],
            manufacturer_name: open_fda.manufacturer_name[0],
            route: open_fda.manufacturer_name[0],
            id: Number(index),
          });
        });
      }
      addDrugs(data, dispatch);
    });
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const data = state.drugList.filter((item) => {
    if (searchInput === "") {
      return item;
    } else {
      return item.brand_name.toLowerCase().includes(searchInput);
    }
  });

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Search Medicine"
        onChange={handleChange}
        className="m-2"
      />
      <List data={data} />
    </Container>
  );
}

export default Home;
