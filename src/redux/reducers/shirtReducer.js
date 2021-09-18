const initialState = {
  partsGroup: null,
  partList: [],
  selectedPart: "None",
  modelCenter: {
    x: 0,
    y: 0,
  },
  selectedTexture: {
    name: "None",
    map: null,
    normalMap: null,
  },
};

const shirtEditorReducer = (state = initialState, actions) => {
  const { partsGroup } = actions;
  return (state = { ...state, partsGroup });
};

export default shirtEditorReducer;
