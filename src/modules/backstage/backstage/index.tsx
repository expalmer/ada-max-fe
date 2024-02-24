import { Link } from "react-router-dom";

export const Backstage = () => {
  return (
    <>
      <h1>Backstage</h1>

      <Link to="/backstage">Home</Link>
      <Link to="/backstage/banners">Banners</Link>
      <Link to="/backstage/offers">Offers</Link>
    </>
  );
};
