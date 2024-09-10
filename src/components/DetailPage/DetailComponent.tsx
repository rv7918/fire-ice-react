import React from "react";
import { useParams } from "react-router-dom";
import { IDetails } from "./Detail.interface";

const DetailComponent = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = React.useState<IDetails>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const baseDetailsUrl = `https://anapioficeandfire.com/api/houses/${id}`;

  const getDetailsData = async () => {
    try {
      const response = await fetch(baseDetailsUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setDetailsData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getDetailsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="container mt-3">
        {loading ? (
          <>Loading...</>
        ) : error ? (
          <>Error: {error}</>
        ) : (
          <>
            <div className="details-container">
              <h3>{detailsData?.name}</h3>
              <p>Region: {detailsData?.region}</p>
              <p>
                Ancestral of weapons:{" "}
                {detailsData?.ancestralWeapons.length > 0
                  ? detailsData?.ancestralWeapons
                  : "No information"}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailComponent;
