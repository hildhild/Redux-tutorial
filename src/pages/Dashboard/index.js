import React, { useState } from 'react';
import Header from "../../components/Header";
import Form from "../../components/Form";
import Info from "../../components/Info";

function Dashboard() {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div>
            <Header page='Dashboard'/>
            <div className="grid grid-cols-2 h-full px-[20px]">
                <Form onFormSubmit={handleFormSubmit}></Form>
                {formData && <Info data={formData} />}
            </div>
        </div> 
    );
}

export default Dashboard;


