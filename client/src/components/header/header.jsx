import React, { useEffect } from "react";
import Button from "../button/button";
import DropDown from "../dropDown/dropDown";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../redux/store/slices/authenticationSlice";
import { changeCurrency } from "../../redux/store/slices/currencySelectorSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const currencyOptions = ["USD", "INR"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currencySelected = useSelector((state) => {
    return state.currencySelector;
  });

  const selectCurrency = (currency) => {
    dispatch(changeCurrency(currency));
  };

  const logInClicked = () => {
    dispatch(logIn("login"));
    navigate("/form");
  };

  const signUpClicked = () => {
    dispatch(signUp("signup"));
    navigate("/form");
  };

  return (
    <>
      <div className="header_bar">
        <div className="header_container">
          <div className="header_logo">
            <Link to="/">@CryptoTrack</Link>
          </div>
          <div className="header_navigation"></div>
          <div className="header_button">
            <Button className="filled_button" onClick={logInClicked}>
              Log In
            </Button>
            <Button className="outlined_button" onClick={signUpClicked}>
              Sign Up
            </Button>
            <DropDown
              name="currency_selector"
              options={currencyOptions}
              onChange={(value) => selectCurrency(value)}
            />
            <Button className="outlined_button">theme</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
