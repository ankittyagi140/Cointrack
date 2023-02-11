import React, { useEffect, useState } from "react";
import CardWithImage from "../../components/card/cardWithImage";
import { httpMehods } from "../../services/methods";
import "./Home.scss";

const Home = () => {
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await httpMehods.getMethod("/api/markets");
      console.log(data);
      setCoinData(data);
    };
    fetchdata();
    setIsLoading(false);
  }, []);

  return (
    <>
      <h1>Crypto list</h1>
      <div className="card_container">
        {coinData.map((data) => {
          return (
            <CardWithImage
              image={data?.image}
              name={data?.name}
              alt={data?.name}
              text={data?.last_updated}
              height="80px"
              width="80px"
            />
          );
        })}
      </div>
      x
    </>
  );
};

export default Home;
