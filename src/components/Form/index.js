import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import formSlice from './formSlice';
import successModalSlice from '../SuccessModal/successModalSlice';
import { useSelector } from "react-redux";

function Form() {
    const dispatch = useDispatch();

    const [, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        note: ''
    });

    //Du lieu khi dispatch thi moi thay doi
    const curFormData = useSelector(state => state.dashboard.formData);

    //Lay cac field hien tai, thay doi tuc thoi
    const [name, setName] = useState(curFormData.name);
    const [age, setAge] = useState(curFormData.age);
    const [phone, setPhone] = useState(curFormData.phone);
    const [email, setEmail] = useState(curFormData.email);
    const [note, setNote] = useState(curFormData.note);

    const handleInputChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
    
        if (field === 'name') {
            setName(value);
        } else if (field === 'age') {
            setAge(value);
        } else if (field === 'phone') {
            setPhone(value);
        } else if (field === 'email') {
            setEmail(value);
        } else if (field === 'note') {
            setNote(value);
        }
      };
    
    const handleSubmit = (event) => {
        event.preventDefault(); //Ngăn chặn hành vi mặc định (load lại trang)
        const formData = { name, age, phone, email, note };
        setFormData(formData);
        dispatch(successModalSlice.actions.openModal(true));
        dispatch(formSlice.actions.formSubmit(formData));
    };

    
    return (
      <div className="px-[15px]">
        <form onSubmit={handleSubmit} className=''>
            <div>
                <div className='font-semibold mb-[10px]'>Name:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="name" value={name} onChange={handleInputChange} placeholder="Enter your name..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Age:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="number" name="age" value={age} onChange={handleInputChange} placeholder="Enter your age..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Phone:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="phone" value={phone} onChange={handleInputChange} placeholder="Enter your phone..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Email:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="email" name="email" value={email} onChange={handleInputChange} placeholder="Enter your email..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Note:</div>
                <textarea className='mb-[50px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' placeholder="Enter note..." name='note' value={note} onChange={handleInputChange}></textarea>
            </div>
            <input type="submit" value="SAVE" className="bg-[#232323] text-[#FDFDFD] w-full cursor-pointer py-[10px] rounded-xl mb-[20px] hover:opacity-80 hover:text-white" />
        </form>
      </div>
    );
}
  
export default Form;