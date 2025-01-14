// import React, { useState, useEffect } from "react";
import { HashTags } from "./index";
import "../index.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

const SideBar = () => {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/Categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // })

  return (
    <aside className=" flex-[3_3_0] w-54 ml-8 mt-24 " aria-label="Sidebar">
      <div className="overflow-y-auto">
        <div>
          <div className="flex mt-5 mb-5">
            <h1 className="text-2xl w-[40%] font-bold text-gray-600"> <span className="text-orange-600">T</span>ag Cloud</h1>
            <hr className=" ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-72 " />
          </div>
          <ul className="flex text-sm flex-wrap mt-2">
            {/* {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} key={c._id}>
                <HashTags key={c._id} name={c.name} />
              </Link>
            ))} */}
            <HashTags color="text-purple-400" name="Get Started"/>
            <HashTags color="text-teal-400" name="Tech"/>
            <HashTags color="text-lime-400" name="Music"/>
            <HashTags color="text-green-400" name="Life"/>
            <HashTags color="text-yellow-400" name="Notice"/>
            <HashTags color="text-blue-400" name="Health"/>
            <HashTags color="text-cyan-400" name="Travel"/>
            <HashTags color="text-red-300" name="Important" />
          </ul>
        </div>
        <div className="flex mt-5 mb-5">
          <h1 className="text-2xl w-[30%] tag-cloud font-bold text-gray-600"><span className="text-orange-600">F</span>ollow !</h1>
          <hr className=" ml-3 mt-4 h-[0.15rem] border-orange-600 bg-orange-600 border-y w-64 " />
        </div>
        <ul className="flex justify-evenly overflow-hidden">
          <li>
            <Link className="sidebar-social-icon">
              <i className="fa-brands fa-instagram px-5 text-[#f009a5] duration-200 hover:scale-125"></i>
            </Link>
          </li>
          <li>
            <Link className="sidebar-social-icon">
              <i className="fa-brands fa-facebook-f px-5 text-[#175beb] duration-200 hover:scale-125"></i>
            </Link>
          </li>
          <li>
            <Link className="sidebar-social-icon">
              <i className="fa-brands fa-twitter px-5 text-[#1da1f2] duration-200 hover:scale-125"></i>
            </Link>
          </li>
          <li>
            <Link className="sidebar-social-icon">
              <i className="fa-solid fa-envelope px-5 text-[#ff6f6f] duration-200 hover:scale-125"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex mt-5 mb-5">
          <h1 className="text-2xl w-[40%] tag-cloud font-bold text-gray-600"><span className="text-orange-600">A</span>dvertising</h1>
          <hr className=" ml-3 mt-4 border-orange-600 bg-orange-600 border-y w-56 " />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
