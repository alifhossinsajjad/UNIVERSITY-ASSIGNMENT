import React, { use } from 'react';
import userImg from '../../assets/heroImage.png'

const Assignment = ({assignmentPromise}) => {

  const assignmentData = use(assignmentPromise);

  console.log(assignmentData);
    

    return (
        <div>
            {
              assignmentData.map(assignment => { 
                console.log(assignment);
               return (
                <div className='shadow-md rounded-md cursor-pointer bg-slate-100'>
                    <div>
                      <img className='h-18' src={userImg} alt="" />
                    </div>
                    <h2>{assignment.requestedBy}</h2>
                </div>
               )
              })
            }
        </div>
    );
};

export default Assignment;