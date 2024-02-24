// import { Avatar } from "../../types";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { Avatar } from "../../../types";
import { getAvatars } from "../../../api/api";
import styles from "./profile.module.css";

export const Profile = () => {
  const [avatars, setAvatars] = useState<Avatar[]>([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      const { data } = await getAvatars();
      setAvatars(data);
    };

    fetchAvatars();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <div className={styles.container}>
        {avatars.map((avatar) => (
          <div key={avatar.id}>
            {avatar.name}
            <img src={`/images/${avatar.image}.png`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};
