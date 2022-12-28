import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { accountContext } from "../../context/account.context";
import useAccounts from "../hooks/useAccount";
import FriendItem from "./FriendItem";
import MatchhistoryItem from "./MatchhistoryItem";
import { FriendsData } from "./FriendsData";
import styled from "styled-components"

function MatchHistory() {
  const [data, setData] = useState([]);
  const [me, setME] = useState([]);
  const [expanded, setExpanded] = useState(false);  
  const [loading, setLoading] = useState(true);
  
  // const {getAccounts} = useContext(accountContext);

  useEffect(() => {
    setTimeout(() => {
    axios.get('http://localhost:5000/games/all', {
      withCredentials: true,
    }).then((res) => {
      setData(res.data);
      setLoading(false);

    }).catch((err) => {

      setLoading(false);
    })}, 1000);
  },[]);
  useEffect(() => {
    setTimeout(() => {
    axios.get('http://localhost:5000/users/me', {
      withCredentials: true,
    }).then((res) => {
      setME(res.data);
      setLoading(false);

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

        <h3 className="text-[25px] leading-[29px] font-bold">Game History</h3>
        <div>
        <SButton  type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </SButton>
        </div>
        </div>
          
        
         {
         loading ? <div className="lds-dual-ring"></div>
            : (
                <table className="table-fixed w-full mt-4 border-separate border-spacing-4">
                <thead className="mb-2 border">
                  <tr>
                    <th>Opponent</th>
                    <th>Score</th>
                    <th>Date</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                    {
                        data.map((friend, index) => {
 

                            const data =
                            {
                              won: friend.winnerid === me.Userid ? 1 : 0, 
                              key: index,
                              opid: friend.winnerid === me.Userid? friend.loser.username : friend.winner.username ,
                              winnerscore: friend.Scorewin,
                              loserscore: friend.Scorelose,
                              time: new Date(friend.playedat).toISOString().slice(0,10),//.replace(/-/g,""),
                            }
                            if (!expanded )
                  {

                  if (index < 2)
                      return (
                        <MatchhistoryItem key={index} data={data} />
                      )

                  }
                  else
                    return (
                    <MatchhistoryItem key={index} data={data} />
                  )
                        })
                    }
                </tbody>
              </table>
 
          )
          }
        </div>
        
     //)
          }
    </>
  );
}

export default MatchHistory;


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


