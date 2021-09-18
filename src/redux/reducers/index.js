import { combineReducers } from "redux";
import shirtEditorReducer from "./shirtReducer";

const allReducers = combineReducers({
  shirtEditor: shirtEditorReducer,
});

export default allReducers;
