import { useParams } from "react-router-dom";

const DetailComponent = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container">Detail {id}</div>
    </>
  );
};

export default DetailComponent;
