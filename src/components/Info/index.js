import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";


function Info() {
    const navigate = useNavigate();
    const formData = useSelector(state => state.dashboard.formData);

    return (
        <div className="px-[15px]">
            <div className='flex justify-end mb-[30px]'>
                <button className='bg-[#EFEFEF] hover:bg-[#D3EAF1] font-semibold rounded-md w-[100px] px-[10px] py-[5px]' onClick={()=>{navigate('/')}}>Edit</button>
            </div>
            <p className='mb-[30px]'><strong>Name:</strong> {formData.name}</p>
            <p className='mb-[30px]'><strong>Age:</strong> {formData.age}</p>
            <p className='mb-[30px]'><strong>Phone:</strong> {formData.phone}</p>
            <p className='mb-[30px]'><strong>Email:</strong> {formData.email}</p>
            <p className='h-[100px] break-words'><strong>Note:</strong> {formData.note}</p>
        </div>  
    );
}
  
export default Info;