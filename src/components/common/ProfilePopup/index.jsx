import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../../api/AuthAPI";
// import { getCurrentUser } from "../../../api/firestoreAPI";
// import Button from "../Button";
import "./index.scss";

export default function ProfilePopup() {
    const call=async()=>{
        await onLogout();
    }
    //   let navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useState({});
//   useMemo(() => {
//     getCurrentUser(setCurrentUser);
//   }, []);
  return (
    <div className="popup-card">
      {/* <p className="name">{currentUser?.name}</p>
      <p className="headline">{currentUser?.headline}</p>
      <Button
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout} /> */}
      <ul className="popup-options">
        <li className="popup-option" onClick={call}>
            Logout
        </li>
      </ul>
    </div>
  );
}