import Header from "../../components/Header";
import Info from "../../components/Info";

function Profile() {

    return ( 
        <div>
            <Header page='Profile'/>
            <div className="px-[20px]">
                <Info/>
            </div>
        </div> 
    );
}

export default Profile;