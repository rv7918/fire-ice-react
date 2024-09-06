import React from "react";
import { IHomeData } from "./Home.interface";
import Card from "../card/Card";

const HomeComponent = () => {
  // BaseUrl
  const baseUrl = "https://www.anapioficeandfire.com/api/houses";

  // State
  const [data, setData] = React.useState<IHomeData[]>([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);

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
  }, []);

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
        </>
      )}
    </div>
  );
};

export default HomeComponent;
