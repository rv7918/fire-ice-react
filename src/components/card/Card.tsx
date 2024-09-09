import { IHomeData } from "../home/Home.interface";
import { useNavigate } from "react-router-dom";

import "./card.css";

interface ICard {
  data: IHomeData[];
}

const Card = (props: ICard) => {
  const navigate = useNavigate();

  const cardOnClick = (item) => {
    console.log(item);
    const itemIndex = item.replace(/[^0-9]/g, "");
    navigate(`/details/${itemIndex}`);
  };

  return (
    <>
      {props?.data.map((item, index) => {
        return (
          <div
            key={index}
            className="col-lg-3"
            onClick={() => cardOnClick(item.url)}
          >
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item?.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item?.region}
                </h6>
                <p className="card-text">
                  {item?.coatOfArms.length > 0
                    ? item?.coatOfArms
                    : "No Information"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
