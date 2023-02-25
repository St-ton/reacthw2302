import { createStore } from "redux";

const initialState = {
  maleUsers: [],
  femaleUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MALE_USER":
      return { ...state, maleUsers: [...state.maleUsers, action.payload] };
    case "ADD_FEMALE_USER":
      return {
        ...state,
        femaleUsers: [...state.femaleUsers, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(userReducer);
