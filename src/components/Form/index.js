import React, { useState } from 'react';

function Form({ onFormSubmit }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
        onFormSubmit(formData);
    };
    
    return (
      <div className="px-[15px]">
        <form onSubmit={handleSubmit} className=''>
            <div>
                <div className='font-semibold mb-[10px]'>Name:</div>
                <input disabled={submitted} className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="name" value={name} onChange={handleInputChange} placeholder="Enter your name..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Age:</div>
                <input disabled={submitted} className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="number" name="age" value={age} onChange={handleInputChange} placeholder="Enter your age..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Phone:</div>
                <input disabled={submitted} className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="phone" value={phone} onChange={handleInputChange} placeholder="Enter your phone..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Email:</div>
                <input disabled={submitted} className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="email" name="email" value={email} onChange={handleInputChange} placeholder="Enter your email..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Note:</div>
                <textarea disabled={submitted} className='mb-[50px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' placeholder="Enter note..." name='note' value={note} onChange={handleInputChange}></textarea>
            </div>
            <input type="submit" value="SAVE" className="bg-[#232323] text-[#FDFDFD] w-full cursor-pointer py-[10px] rounded-xl mb-[20px] hover:bg-[#383838] hover:text-white" />
        </form>
      </div>
    );
}
  
export default Form;