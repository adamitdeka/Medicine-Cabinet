import React, { createContext, useReducer } from "react";

const initialState = {
  drugList: [],
  cabinetDrugs: [],
};

export const Store = createContext(initialState);

const addDrugs = (state, drugs) => {
  return { ...state, drugList: [...drugs] };
};

const addDrugToCabinet = (state, drug) => {
  let drugs = state.cabinetDrugs;
  let drugExist = false;
  let newDrugs = drugs.map((item, index) => {
    if (item.id === drug.id) {
      drugExist = true;
      item.count += 1;
    }
    return item;
  });
  return {
    ...state,
    cabinetDrugs: drugExist
      ? [...newDrugs]
      : [...newDrugs, { ...drug, count: 1 }],
  };
};

const addNotes = (state, data) => {
  let drugs = state.cabinetDrugs;
  let drugsAfterNotes = drugs.map((item, index) => {
    console.log(item.id, data.id);
    if (item.id === data.id) {
      if (item.notes) {
        item.notes.push(data.notes);
        console.log(item);
      } else {
        item.notes = [];
        item.notes.push(data.notes);
        console.log(item);
      }
    }
    return item;
  });
  console.log(drugsAfterNotes);
  return { ...state, cabinetDrugs: [...drugsAfterNotes] };
};

const removeDrugFromCabinet = (state, drugId) => {
  let drugs = state.cabinetDrugs;
  let newDrugs = drugs
    .map((item, index) => {
      if (item.id === drugId) {
        item.count -= 1;
      }
      return item;
    })
    .filter((drug) => drug.count !== 0);

  return {
    ...state,
    cabinetDrugs: newDrugs,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DRUGS":
      return addDrugs(state, action.drugs);
    case "ADD_DRUG":
      return addDrugToCabinet(state, action.drug);
    case "REMOVE_DRUG":
      return removeDrugFromCabinet(state, action.drugId);
    case "ADD_NOTES":
      return addNotes(state, action.data);
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
