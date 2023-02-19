import React, { useEffect } from "react";
import { useParams } from "react-router";
import services from "../../../../server/services/services";
import "./details.scss";

const Details = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchCoinDetails = async (id) => {
      const response = await services.coinDetailsPageApi(`/api/coins/${id}`);
      console.log(response.data);
    };
    fetchCoinDetails(id);
  }, []);

  return <>Details page</>;
};
export default Details;
