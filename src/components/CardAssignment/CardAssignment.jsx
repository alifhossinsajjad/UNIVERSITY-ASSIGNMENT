import React from 'react';
import userImg from '../../assets/heroImage.png'
const CardAssignment = ({assignment,data, setData}) => {


const handleClick = () => {

  const curentData = data.find(ele => ele.ticketId == assignment.ticketId)


  if(curentData.status == 'Pending'){
    curentData.status = 'Submitted';
  }else if (curentData.status == 'Submitted'){
    curentData.status = 'Reviewed'
  }

  const resData = data.filter(ele => ele.ticketId !== assignment.ticketId)


  console.log({curentData,resData});


  setData[{curentData, ...resData}]
}





    return (
        <div className='shadow-md rounded-md cursor-pointer bg-slate-100 md:p-4 p-6' onClick={handleClick}>
                <div>
                  <img className='h-18' src={userImg} alt="" />
                  <h2>{assignment.requestedBy}</h2>
                </div>

                <div className='flex justify-between'>
                  <h2 className='font-semibold text-2xl'>{assignment.subject}</h2>
                  <div >
                    <span className={`font-semibold rounded mr-2  py-2 px-1 shadow ${assignment.priority == 'High' ? 'text-red-500 bg-red-100' : assignment.priority == 'Medium' ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>{assignment.priority}

                    </span>

                    <span className={`font-semibold rounded mr-2  py-2 px-1 shadow ${assignment.status == 'Pending' ? 'text-red-500 bg-red-100' : assignment.status == 'Submitted' ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>{assignment.status}</span>
                  </div>
                </div>
                <h2 className='text-sm text-gray-500'>{assignment.description}</h2>
              </div>
    );
};

export default CardAssignment;