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
                        <h3><NavLink to="/Schedule" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Schedule</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Location" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Location</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Logistics" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Logistics</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Resources" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Resources</NavLink></h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}
