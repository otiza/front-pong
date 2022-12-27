import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { accountContext } from "../../context/account.context";
import useAccounts from "../hooks/useAccount";
import FriendItem from "./FriendItem";
import { FriendsData } from "./FriendsData";
import styled from "styled-components"

function Friends() {
  const [data, setData] = useState([]);
  
  const [expanded, setExpanded] = useState(false);  
  const [loading, setLoading] = useState(true);
  // const {getAccounts} = useContext(accountContext);

  useEffect(() => {
    setTimeout(() => {
    axios.get('http://localhost:5000/users/all', {
      withCredentials: true,
    }).then((res) => {
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    }).catch((err) => {
      console.table(err);
      setLoading(false);
    })}, 1000);
  },[]);

  return (
    <>
      {//loading ? <div class="lds-dual-ring"></div>
      //: (
      <div className="bg-[#2c2f489c] rounded-[10px] p-5 pb-8">
        {/* FRIENDS TITLE */}
        <div style={{width :  "100%" , display : "flex" , alignItems : "center"  , justifyContent : "space-between" }}>

        <h3 className="text-[25px] leading-[29px] font-bold">Friends</h3>
        <div>
        <SButton  type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </SButton>
        </div>
        </div>
          
        
         {loading ? <div class="lds-dual-ring"></div>
        : (
          
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
                  if (!expanded )
                  {

                  if (index < 8)
                      return (
                        <FriendItem key={index} data={data} />
                      )

                  }
                  else
                    return (
                    <FriendItem key={index} data={data} />
                  )
                 // if(index % 3 === 0){(
                //  return </div>
               // )}
              })
            }

            </div>
          )}
        </div>
        
     //)
          }
    </>
  );
}

export default Friends;


const SButton = styled.button`

  align-items: center;
  background-color: initial;
  background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
  border-radius: 42px;
  border-width: 0;
  box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-family: Quicksand,sans-serif;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: .04em;
  line-height: 16px;
  margin: 0;
  padding: 18px 18px;
  text-align: center;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;


&:hover {
  background-image: linear-gradient(#B384C9, #391F5B 50%);
  transform: translateY(-3px)
}

@media (min-width: 768px) {
  .button-72 {
    font-size: 21px;
    padding: 18px 34px;
  }
}
`