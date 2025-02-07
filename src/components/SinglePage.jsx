import { useParams } from "react-router";

const SinglePage = () => {
  let { id } = useParams();
  return <h1>id is {id}</h1>;
};

export default SinglePage;
