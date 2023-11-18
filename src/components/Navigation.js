import { NavLink } from "react-router-dom";

/**
 * Menu Navigation bar to navigate to different parts of the project
 * @returns 
 */
export default function Navigation() {
    return (
        <div className="Navigation">
            <div className="Navigation_branding">
                <NavLink to="/">High Ground Design Conversations</NavLink>
            </div>            
            <div className="Navigation_links">
                <ul id="Navigation_list">
                    <li className="Navigation_link">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    </li>
                    <li className="Navigation_link">
                        <NavLink to="/Schedule" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Schedule</NavLink>
                    </li>
                    <li className="Navigation_link">
                        <NavLink to="/Logistics" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Logistics</NavLink>
                    </li>
                    <li className="Navigation_link">
                        <NavLink to="/Resources" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Resources</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
