import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { callBookReducer, formReducer } from "./reducers/formReducer";
import {
  getMentorByIdReducer,
  mentorsListReducer,
} from "./reducers/mentorsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addMentorReducer,
  removeMentorReducer,
  updateMentorReducer,
} from "./reducers/addMentorReducer";

const reducer = combineReducers({
  form: formReducer,
  mentorsReducer: mentorsListReducer,
  addMentor: addMentorReducer,
  callBook: callBookReducer,
  removeMentor: removeMentorReducer,
  updateMentor: updateMentorReducer,
  getMentorById: getMentorByIdReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
