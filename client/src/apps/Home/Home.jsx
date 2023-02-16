import React, { useEffect, useState } from "react";
import CardWithImage from "../../components/card/cardWithImage";
import {
  Trending,
  TopGainers,
  TopLoosers,
  ControlledCheckbox,
} from "../../components";
import { services } from "../../services/services";
import { helpers } from "../../utils/helpers";

import "./Home.scss";

const Home = () => {
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trendingCoinData, setTrendingCoinData] = useState();
  const [sortedTopGainerCoins, setSortedTopGainerCoins] = useState();
  const [sortedTopLoosersCoins, setSortedTopLoosersCoins] = useState();
  const highLightOption = helpers.localStorageGet("highLightOption");
  const [checked, setChecked] = useState(
    highLightOption ? highLightOption === "true" : true
  );

  const highLightCheckBox = (event) => {
    setChecked(event.target.checked);
    helpers.localStorageSet("highLightOption", event.target.checked);
  };

  useEffect(() => {
    const trendingCoin = async () => {
      const { data } = await services.trendingCoinApi("/api/search/trending");
      setTrendingCoinData(data.coins);
      setIsLoading(false);
    };

    //common function for top gainers and top loosers coins
    const topGainerCoin = async () => {
      const { data } = await services.topGainerCoinApi(
        "/api/coins/markets/topgainer"
      );
      setSortedTopGainerCoins(helpers.sortTopGainerCoins(data));
      setSortedTopLoosersCoins(helpers.sortTopLoosersCoins(data));
      setIsLoading(false);
    };
    topGainerCoin();
    trendingCoin();
  }, []);
  // useEffect(() => {
  //   // const fetchdata = async () => {
  //   //   const { data } = await services.marketsDataApi("/api/coins/markets");
  //   //   setCoinData(data);
  //   // };
  //   // fetchdata();
  //   // setIsLoading(false);
  //   // const trendingCoin = async () => {
  //   //   const { data } = await services.trendingCoinApi("/api/search/trending");
  //   //   console.log(data.coins);
  //   //   setTrendingCoinData(data.coins);
  //   // };
  //   // trendingCoin();
  // }, []);

  return (
    <>
      <div className="home_container">
        <div className="market_view">
          <div className="market_title">
            <h1>Today's Cryptocurrency Prices by Market Cap</h1>
            <span>
              The global crypto market cap is $1.11T, a 8.27% increase over the
              last day.
            </span>
          </div>
          <div className="highlight_chekckbox">
            Highlights
            <ControlledCheckbox
              onChange={(e) => {
                highLightCheckBox(e);
              }}
              checked={checked}
            />
          </div>
        </div>
        {checked ? (
          <div className="highlight_container">
            <Trending
              trendingCoinData={trendingCoinData}
              isLoading={isLoading}
            />
            <TopGainers
              sortedTopGainerCoins={sortedTopGainerCoins}
              isLoading={isLoading}
            />
            <TopLoosers
              sortedTopLoosersCoins={sortedTopLoosersCoins}
              isLoading={isLoading}
            />
          </div>
        ) : null}

        {/* <div className="card_container">
          {coinData.map((data) => {
            return (
              <CardWithImage
                image={data?.image}
                name={data?.name}
                alt={data?.name}
                current_price={data?.current_price}
                text={data?.last_updated}
                height="80px"
                width="80px"
                key={data?.id}
              />
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Home;
