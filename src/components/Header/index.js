import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faUser} from '@fortawesome/free-solid-svg-icons'


function Header({page}) {  
    const navigate = useNavigate();

    return ( 
        <div className="px-[20px] py-[30px] flex justify-between">
            <div className="text-[30px] font-semibold">{page}</div>
            <div className='flex items-center'>
                <div className='w-[40px] h-[40px] rounded-full border-solid border-[1px] grid place-content-center cursor-pointer mr-[10px] hover:bg-black hover:text-white'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full border-solid border-[1px] grid place-content-center cursor-pointer mr-[10px] hover:bg-black hover:text-white'>
                    <FontAwesomeIcon icon={faBell}/>
                </div>
                {
                    page === "Profile"
                    ?
                    <button onClick={() => {navigate('/profile')}} className='w-[45px] h-[45px] rounded-full border-solid border-[1px] grid place-content-center cursor-pointer mr-[10px] bg-black text-white'>
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                    :
                    <button onClick={() => {navigate('/profile')}} className='w-[45px] h-[45px] rounded-full border-solid border-[1px] grid place-content-center cursor-pointer mr-[10px] hover:bg-black hover:text-white'>
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                }
            </div>

        </div> 
    );
}

export default Header;