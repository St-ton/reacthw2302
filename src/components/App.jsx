import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import UserForm from "./UserForm";
import MaleUsers from "./MaleUsers";
import FemaleUsers from "./FemaleUsers";
import Footer from "./Footer";

const initialState = {
  maleUsers: [],
  femaleUsers: [],
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Male and Female Users:</h1>
        <UserForm />
        <h5>Если ссылка на аватар не указана, то выводится шаблонное фото</h5>
        <h5>
          Чтобы проверить правильность фильтрации - наведите мышкой на карточку
        </h5>
        {/* <div className="users-container"> */}
        <MaleUsers />
        <FemaleUsers />
      </div>
      {/* </div> */}
      <Footer />
    </Provider>
  );
};

export default App;
