
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function MatchhistoryItem(props) {
  // INTEGRATE DATA
  const { won,  opid, winnerscore, loserscore, time, } = props.data;

  return (
    <tr className="w-full ">
      <td className="flex justify-center items-center">
        <div className={` flex items-center gap-2  ${won === 1 ? 'text-green-600' : 'text-red-600'}`}>
            <img
              className="w-10 h-10 rounded-full"
              src="https://ucarecdn.com/e41c47fc-da5b-4010-b4cf-6fe090089ec1/"
              alt="friend_img"
              />
            <Link to={`/user/${opid}`}>{opid}</Link>
        </div>
      </td>
      <td className="">
        <span className={`block w-fit  m-auto ${won === 1 ? 'text-green-600' : 'text-red-600'}`}>
            {` ${winnerscore} - ${loserscore}`}
        </span>
      </td>
      <td>
        <span className={`block w-fit  m-auto ${won === 1 ? 'text-green-600' : 'text-red-600'}`}>
            {time}
        </span>
      </td>
      <td>

        <span className={`block w-fit  m-auto ${won === 1 ? 'text-green-600' : 'text-red-600'}`}>
            ARAM
        </span>
      </td>
    </tr>
  );
}

export default MatchhistoryItem;