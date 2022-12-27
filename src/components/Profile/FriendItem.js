import React from "react";

function FriendItem(props) {
  // INTEGRATE DATA
  const { userId, email, username } = props.data;
  return (
    <>
      {/* FRIEND ITEM */}
      <div className="flex items-center" key={userId}>
        {/* FRIEND IMAGE */}
        <img
          className="w-12 h-12 rounded-full"
          src="https://ucarecdn.com/e41c47fc-da5b-4010-b4cf-6fe090089ec1/"
          alt="friend_img"
        />
        {/* FRIEND NAME */}
        <h5 className="ml-7 text-[24px] leading-[35px]">{email}</h5>
        <h5 className="ml-7 text-[24px] leading-[35px]">{username}</h5>
      </div>
    </>
  );
}

export default FriendItem;
