import React from "react";

function FriendItem(props) {
  // INTEGRATE DATA
  const { userId, email, username } = props.data;
  return (
    <>
      {/* FRIEND ITEM */}
      <div className="test">
      <div className="flex items-center" key={userId}>
        {/* FRIEND IMAGE */}
        <img
          className="w-16 h-16 rounded-full"
          src="https://ucarecdn.com/e41c47fc-da5b-4010-b4cf-6fe090089ec1/"
          alt="friend_img"
        />
        {/* FRIEND NAME */}
        
        <h5 className="ml-7 text-[24px] leading-[35px]">{username}</h5>
      </div>
      </div>
    </>
  );
}

export default FriendItem;
