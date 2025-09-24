import React from 'react';
import Container from '../container/Container';

const Buttons = ({toggleStatus,setToggleStatus}) => {
    return (
        <Container>
  <div className='text-right mb-14'>
  <button onClick={()=>{setToggleStatus("All")}} className={`toggle-btn rounded-l-md ${toggleStatus == "All" && "!bg-purple-500 !text-white"}`}>All</button>
  <button onClick={()=>{setToggleStatus("Pending")}} className={`toggle-btn ${toggleStatus == "Pending" && "!bg-purple-500 !text-white"}`}>Pendding</button>
  <button onClick={()=>{setToggleStatus("Submitted")}} className={`toggle-btn ${toggleStatus == "Submitted" && "!bg-purple-500 !text-white"}`}>Submitted</button>
  <button onClick={()=>{setToggleStatus("Reviewed")}} className={`toggle-btn rounded-r-md  ${toggleStatus == "Reviewed" && "!bg-purple-500 !text-white"}`}>Reviewed</button>
</div>
</Container>
    );
};

export default Buttons;