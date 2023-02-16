import React, { useEffect, useState } from "react";
import services from "../../../../server/services/services";
import CoinCard from "../coinCard/coinCard";
import Loading from "../loading/loading";
import "./topGainers.scss";
import { useNavigate } from "react-router";

const TopGainers = ({ sortedTopGainerCoins, isLoading }) => {
  const navigate = useNavigate();

  const detailPage = async (id) => {
    // console.log(id);

    navigate(`/coins/${id}`);
  };

  return (
    <>
      <div className="recently_added">
        <h3>Top Gainer</h3>
        {isLoading ? (
          <Loading />
        ) : (
          sortedTopGainerCoins &&
          sortedTopGainerCoins.map((topGainer, index) => {
            return (
              <div
                className="coin_list"
                key={topGainer?.id}
                onClick={() => detailPage(topGainer?.id)}
              >
                <span>{index + 1}</span>
                <div className="coin_data">
                  <img
                    className="coin_image"
                    src={topGainer?.image}
                    alt="trending coins"
                    height="25px"
                    width="25px"
                  />
                  <p className="coin_name">{topGainer?.symbol}</p>
                  <span className="coin_symbol">{topGainer?.name}</span>
                </div>
                <div className="coin_price">
                  +{(topGainer?.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default TopGainers;
