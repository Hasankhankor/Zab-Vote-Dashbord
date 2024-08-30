import React from "react";

const Header = ({ toggleHidden }) => {
  return (
    <div className='flex justify-between items-center headerlist '>
      <i className='fa-regular fa-bars ' onClick={toggleHidden}></i>
      <h4>ZabVote Dashboard</h4>
    </div>
  );
};

export default Header;
