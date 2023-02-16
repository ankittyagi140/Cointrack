import React from "react";
import Loading from "../loading/loading";
import "./topLoosers.scss";

const TopLoosers = ({ sortedTopLoosersCoins, isLoading }) => {
  return (
    <>
      <div className="top_loosers">
        <h3>Top Loosers</h3>
        {isLoading ? (
          <Loading />
        ) : (
          sortedTopLoosersCoins &&
          sortedTopLoosersCoins.map((toploosers, index) => {
            return (
              <div className="coin_list" key={toploosers?.id}>
                <span>{index + 1}</span>
                <div className="coin_data">
                  <img
                    className="coin_image"
                    src={toploosers?.image}
                    alt="trending coins"
                    height="25px"
                    width="25px"
                  />
                  <p className="coin_name">{toploosers?.symbol}</p>
                  <span className="coin_symbol">{toploosers?.name}</span>
                </div>
                <div className="coin_price">
                  {(toploosers?.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default TopLoosers;
