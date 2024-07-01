import React from 'react';

function Info({ data }) {
    return (
        <div className="px-[15px]">
            <p className='mb-[30px]'><strong>Name:</strong> {data.name}</p>
            <p className='mb-[30px]'><strong>Age:</strong> {data.age}</p>
            <p className='mb-[30px]'><strong>Phone:</strong> {data.phone}</p>
            <p className='mb-[30px]'><strong>Email:</strong> {data.email}</p>
            <p className='h-[100px] break-words'><strong>Note:</strong> {data.note}</p>
        </div>  
    );
}
  
export default Info;