import React from 'react';
import Container from '../container/Container';

const CountBox = ({data}) => {

    
    const pendingData = data.filter(element => element.status == 'Pending')
    const submittedData = data.filter(element => element.status == 'Submitted')
    const reviewedData = data.filter(element => element.status == 'Reviewed')
    return (
        <Container>
            <div className='grid grid-cols-3 gap-5 my-14 '>
                <div className='flex flex-col text-center justify-center rounded-md p-7 text-white h-64  bg-gray-500'>
                    <h2>pendding</h2>
                    <p>{pendingData.length}</p>
                </div>
                <div className='flex flex-col text-center justify-center rounded-md p-7 text-white h-64  bg-purple-500'>
                    <h2>Submitted</h2>
                    <p>{submittedData.length}</p>
                </div>
                <div className='flex flex-col text-center justify-center rounded-md p-7 text-white h-64  bg-teal-500'>
                    <h2>Reviewed</h2>
                    <p>{reviewedData.length}</p>
                </div>
            </div>
        </Container>
    );
};

export default CountBox;