import Header from "../../components/Header";
import Info from "../../components/Info";
import { useSelector } from "react-redux";
// import { formDataSelector } from "../../redux/selectors";

function Profile() {
    const formData = useSelector(state => state.dashboard.formData);

    return ( 
        <div>
            <Header page='Profile'/>
            <div className="px-[20px]">
                <Info data={formData} />
            </div>
        </div> 
    );
}

export default Profile;