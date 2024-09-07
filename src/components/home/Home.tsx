import React from "react";
import { IHomeData } from "./Home.interface";
import Card from "../card/Card";
import Paginate from "../paginate/Paginate";
import "./home.css";

const HomeComponent = () => {
  // State
  const [data, setData] = React.useState<IHomeData[]>([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const pageSize = 8;

  // BaseUrl
  const baseUrl = `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`;

  // GetData function
  const getData = async () => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Lifecycle hook to getData onMount
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  //Render the view
  return (
    <div className="container">
      {loading ? (
        <>Loading...</>
      ) : error ? (
        <>Error {error}</>
      ) : (
        <>
          <div className="row">
            <Card data={data} />
          </div>
          <Paginate page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
