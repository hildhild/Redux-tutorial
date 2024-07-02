import React from 'react';
import Header from "../../components/Header";
import Form from "../../components/Form";
import SuccessModal from '../../components/SuccessModal';


function Dashboard() {
    return (
        <div>
            <Header page='Dashboard'/>
            <div className="px-[20px]">
                <Form/>
            </div>
            <SuccessModal/>
        </div> 
    );
}

export default Dashboard;


