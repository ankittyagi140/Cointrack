import React, { useEffect, useState } from "react";
import CoinCard from "../coinCard/coinCard";
import Loading from "../loading/loading";
import "./trending.scss";

const Trending = ({ trendingCoinData, isLoading }) => {
  // useEffect(() => {
  //   trendingCoinsData &&
  //     trendingCoinsData.forEach((element) => {
  //       console.log(element);
  //     });
  //   console.log(trendingCoinsData);
  //   setCoins(trendingCoinsData);
  // }, [trendingCoinsData]);

  return (
    <>
      <div className="trending_container">
        <h3>Trending Coin</h3>
        {isLoading ? (
          <Loading />
        ) : (
          trendingCoinData &&
          trendingCoinData.map((trendingCoin) => {
            return (
              <div className="coin_list" key={trendingCoin?.item?.id}>
                <span>{trendingCoin?.item?.score + 1}</span>
                <div className="coin_data">
                  <img
                    className="coin_image"
                    src={trendingCoin?.item?.thumb}
                    alt="trending coins"
                  />
                  <p className="coin_name">{trendingCoin?.item?.name}</p>
                  <span className="coin_symbol">
                    {trendingCoin?.item?.symbol}
                  </span>
                </div>
                <div className="coin_price">89</div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Trending;
