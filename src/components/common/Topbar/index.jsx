     import React, { useEffect, useState } from "react";
     import logo from "../../../assets/logo.png";
     import user from "../../../assets/user.png";
// //import SearchUsers from "../SearchUsers";
    import {
      AiOutlineHome,
      AiOutlineUserSwitch,
      AiOutlineSearch,
      AiOutlineMessage,
      AiOutlineBell,
    } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
  import { BsBriefcase } from "react-icons/bs";
// import { getAllUsers } from "../../../api/FirestoreAPI";
// import ProfilePopup from "../ProfilePopup";
 import "./index.scss";
 
export default function Topbar(){
  const goToRoute = (route) => {
    navigate(route);}
    return(<div className="topbar-main">
            <img className="logo" src={logo} alt="logo" />
            <AiOutlineSearch
              size={30}
              className="react-icon react-icons"
              // onClick={() => setIsSearch(true)}
            />
            <AiOutlineHome
              size={30}
              className="react-icon react-icons"
               onClick={() => goToRoute("/home")}
            />
            <AiOutlineUserSwitch
              size={30}
              className="react-icon react-icons"
               onClick={() => goToRoute("/connections")}
            />

            <AiOutlineMessage size={30} className="react-icon react-icons" />
            <AiOutlineBell size={30} className="react-icon react-icons" />
            <img
              className="user-logo react-icon react-icons"
              src={user}
              alt="user"/>
              
    </div>
  )
}


// export default function Topbar() {
//   // const [popupVisible, setPopupVisible] = useState(false);
//   // const [isSearch, setIsSearch] = useState(false);
//   // const [users, setUsers] = useState([]);
//   // const [filteredUsers, setFilteredUsers] = useState([]);
//   // const [searchInput, setSearchInput] = useState("");
//   // let navigate = useNavigate();
//    const goToRoute = (route) => {
//      navigate(route);
//   // };

//   // const displayPopup = () => {
//   //   setPopupVisible(!popupVisible);
//   // };

//   // const openUser = (user) => {
//   //   navigate("/profile", {
//   //     state: {
//   //       id: user.id,
//   //       email: user.email,
//   //     },
//   //   });
//   // };

//   // const handleSearch = () => {
//   //   if (searchInput !== "") {
//   //     let searched = users.filter((user) => {
//   //       return Object.values(user)
//   //         .join("")
//   //         .toLowerCase()
//   //         .includes(searchInput.toLowerCase());
//   //     });

//   //     setFilteredUsers(searched);
//   //   } else {
//   //     setFilteredUsers(users);
//   //   }
//   // };

//   // useEffect(() => {
//   //   let debounced = setTimeout(() => {
//   //     handleSearch();
//   //   }, 1000);

//   //   return () => clearTimeout(debounced);
//   // }, [searchInput]);

//   // useEffect(() => {
//   //   getAllUsers(setUsers);
//   // }, []);
//   // return (
//     // <div className="topbar-main">
//     //   {popupVisible ? (
//     //     <div className="popup-position">
//     //       <ProfilePopup />
//     //     </div>
//     //   ) : (
//     //     <></>
//     //   )}

//     //   <img className="linkedin-logo" src={logo} alt="LinkedinLogo" />
//     //   {isSearch ? (
//     //     <SearchUsers
//     //       setIsSearch={setIsSearch}
//     //       setSearchInput={setSearchInput}
//     //     />
//     //   ) : 
//         return(<div>Hii</div>
     // <div className="react-icons">
//         //   <AiOutlineSearch
//         //     size={30}
//         //     className="react-icon"
//         //     // onClick={() => setIsSearch(true)}
//         //   />
//         //   <AiOutlineHome
//         //     size={30}
//         //     className="react-icon"
//         //     // onClick={() => goToRoute("/home")}
//         //   />
//         //   <AiOutlineUserSwitch
//         //     size={30}
//         //     className="react-icon"
//         //     // onClick={() => goToRoute("/connections")}
//         //   />
//         //   <BsBriefcase size={30} className="react-icon" />
//         //   <AiOutlineMessage size={30} className="react-icon" />
//         //   <AiOutlineBell size={30} className="react-icon" />
//         //   <div>
//         //   <img
//         //     className="user-logo"
//         //     src={user}
//         //     alt="user"
//         //     // onClick={displayPopup}
//         //   />
//         //   </div>      
//       )};
     