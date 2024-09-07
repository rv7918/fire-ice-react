import { IHomeData } from "../home/Home.interface";
import "./card.css";

interface ICard {
  data: IHomeData[];
}

const Card = (props: ICard) => {
  return (
    <>
      {props?.data.map((item, index) => {
        return (
          <div key={index} className="col-lg-3">
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
