import { useEffect, useState } from "react";

import { Avatar } from "../../../types";
import { getAvatars } from "../../../api/api";

export const ProfileCreate = () => {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [currentColor, setCurrentColor] = useState<number>(1);

  const [currentAvatar, setCurrentAvatar] = useState<Avatar | null>(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      const { data } = await getAvatars();
      setAvatars(data);
    };

    fetchAvatars();
  }, []);

  return (
    <div className="container">
      <h1>Create Profile</h1>

      <div className="box">
        <div className={`avatarSelected color--${currentColor}`}>
          <div className="avatarSelectedInner">
            {currentAvatar && (
              <img src={`/images/${currentAvatar.image}.png`} />
            )}
          </div>
        </div>
      </div>
      <div className="box">
        {[1, 2, 3, 4, 5].map((color) => (
          <button
            key={color}
            className={`color color--${color} ${
              color === currentColor ? "color--selected" : ""
            }`}
            onClick={() => setCurrentColor(color)}
          ></button>
        ))}
      </div>
      <div className="box">
        <input type="text" />
      </div>
      <div className="box">
        <button>Salvar</button> | <button>Cancelar</button>
      </div>

      <div className="avatar">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className="avatar__item"
            onClick={() => setCurrentAvatar(avatar)}
          >
            <img src={`/images/${avatar.image}.png`} alt={avatar.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
