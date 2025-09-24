import React, { Suspense, use, useState } from 'react';

import Buttons from '../Buttons/Buttons';
import Container from '../container/Container';
import CardAssignment from '../CardAssignment/CardAssignment';
import CountBox from '../CountBox/CountBox';

const Assignment = ({ assignmentPromise }) => {

  const assignmentData = use(assignmentPromise);

  const [toggleStatus, setToggleStatus] = useState("All")

  const [data, setData] = useState(assignmentData)



  const filterdData = toggleStatus == "All" ? data : data.filter(element => element.status == toggleStatus)
  console.log(toggleStatus);
  console.log(filterdData);

  return (

    <div>

    <Container>
      <CountBox data={data} />

       <Buttons toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}/>
    </Container>

    
    <Container>

      {filterdData.length == 0 ? (<h2 className=' text-center text-4xl font-bold text-purple-600 mt-32'> No Data</h2>) :

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-4 gap-12 p-4 mb-6'>
        {
          filterdData.map((assignment, index) =>
            <CardAssignment assignment={assignment} key={index} data={data} setData={setData} />
          )
        }
      </div>
      }
    </Container>
    </div>
  );
};

export default Assignment;