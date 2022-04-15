export const addDrugs = (drugs, dispatch) => {
  dispatch({
    type: "ADD_DRUGS",
    drugs: drugs,
  });
};
export const addDrug = (drug, dispatch) => {
  dispatch({
    type: "ADD_DRUG",
    drug: drug,
  });
};

export const removeDrug = (drugId, dispatch) => {
  dispatch({
    type: "REMOVE_DRUG",
    drugId,
  });
};
export const addNotes = (data, dispatch) => {
  dispatch({
    type: "ADD_NOTES",
    data: data,
  });
};
