import React, { useEffect } from "react";
import { mehods } from "../../services/methods";

const Home = () => {
  useEffect(() => {
    const result = mehods.getMethod("/markets");
    console.log(result);
  }, []);

  return <h1>hello India</h1>;
};

export default Home;
