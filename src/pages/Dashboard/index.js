import React, { useState } from 'react';
import Header from "../../components/Header";
import Form from "../../components/Form";
import { useDispatch } from 'react-redux';
import dashboardSlice from './dashboardSlice';


function Dashboard() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
        dispatch(dashboardSlice.actions.formSubmit(data));
        alert("Save successfully!")
    };

    return (
        <div>
            <Header page='Dashboard'/>
            <div className="px-[20px]">
                <Form onFormSubmit={handleFormSubmit}></Form>
            </div>
        </div> 
    );
}

export default Dashboard;


