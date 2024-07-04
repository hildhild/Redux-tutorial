import React from 'react';
import { useNavigate } from 'react-router-dom'


function Info({ data }) {
    const navigate = useNavigate();

    return (
        <div className="px-[15px]">
            <div className='flex justify-end mb-[30px]'>
                <button className='bg-[#EFEFEF] hover:bg-[#D3EAF1] font-semibold rounded-md w-[100px] px-[10px] py-[5px]' onClick={()=>{navigate('/')}}>Edit</button>
            </div>
            <p className='mb-[30px]'><strong>Name:</strong> {data.name}</p>
            <p className='mb-[30px]'><strong>Age:</strong> {data.age}</p>
            <p className='mb-[30px]'><strong>Phone:</strong> {data.phone}</p>
            <p className='mb-[30px]'><strong>Email:</strong> {data.email}</p>
            <p className='h-[100px] break-words'><strong>Note:</strong> {data.note}</p>
        </div>  
    );
}
  
export default Info;