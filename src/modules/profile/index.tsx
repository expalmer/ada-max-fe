import { useEffect, useState } from "react";

import { Avatar } from "../../types";
import { Link } from "react-router-dom";
import { api } from "../../clients/api";

const mock: Avatar[] = [
  {
    id: 1,
    name: "John Doe",
    image: "",
  },
];

export const Profile = () => {
  const [data, setData] = useState<Avatar[]>(mock);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // api
    //   .get("/profile")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, []);

  return (
    <>
      <h1>Profile</h1>
      {data.map((avatar) => (
        <p key={avatar.id}>
          {avatar.name} <Link to={`/profile/${avatar.id}`}>View</Link>
        </p>
      ))}
    </>
  );
};
