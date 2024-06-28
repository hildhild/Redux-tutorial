import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPenToSquare, faChartSimple, faTableColumns, faMagnifyingGlass, faWindowMaximize, faGears, faDesktop, faEye } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="bg-[#232323] text-[#FDFDFD] h-full py-[30px] px-[20px] text-[22px]">
            <div className=' flex items-center mb-[20px]'>
                <FontAwesomeIcon icon={faGlobe} className='mr-[10px]'/>
                <div className='font-semibold'>Hosty.</div>
            </div>
            <ul className='text-[16px] text-[#B4B4B4]'>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faPenToSquare} className='mr-[10px]'/>
                        Dashboard
                    </Link>
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faChartSimple} className='mr-[10px]'/>
                    Analytics
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faTableColumns} className='mr-[10px]'/>
                    Sites
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-[10px]'/>
                    Explore Domain
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faWindowMaximize} className='mr-[10px]'/>
                    Website Builder
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faGears} className='mr-[10px]'/>
                    Manage Service
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faDesktop} className='mr-[10px]'/>
                    Monitoring
                </li>
                <li className='mb-[15px] py-[10px] cursor-pointer hover:bg-[#383838] hover:text-white px-[10px] rounded-lg'>
                    <FontAwesomeIcon icon={faEye} className='mr-[10px]'/>
                    Activity Log
                </li>
            </ul>
            
        </div> 
    );
}

export default Sidebar;