import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { accountContext } from "../../context/account.context";
import useAccounts from "../hooks/useAccount";
import FriendItem from "./FriendItem";
import { FriendsData } from "./FriendsData";

function Friends() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const {getAccounts} = useContext(accountContext);

  useEffect(() => {
    setTimeout(() => {
    axios.get('http://localhost:5000/users/all', {
      withCredentials: true,
    }).then((res) => {
      setData(res.data.slice(0,6));
      setLoading(false);
      console.log(res.data);
    }).catch((err) => {
      console.table(err);
      setLoading(false);
    })}, 1000);
  },[]);
  return (
    <>
      {loading ? <div class="lds-dual-ring"></div>
      : (
      <div className="bg-[#2c2f489c] rounded-[10px] p-5 pb-8">
        {/* FRIENDS TITLE */}
        <h3 className="text-[25px] leading-[29px] font-bold">Friends</h3>
          
        <div className="mt-5 px-3 flex items-center justify-between flex-wrap gap-x-12 gap-y-6">
          {/* FRIENDS LIST */}
          {/* {data?.map((loopData) => (
              <FriendItem key={loopData.id} data={loopData} />
            ))} */}
            {
              data.map((friend, index) => {
                const data =
                  {
                    key: index,
                    userId: friend.Userid,
                    email: friend.email,
                    username: friend.username,
                  }
                return (
                  <FriendItem key={index} data={data} />
                )
              })
            }
        </div>
      </div>
      )
          }
    </>
  );
}

export default Friends;
