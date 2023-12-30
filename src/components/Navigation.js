import { NavLink } from "react-router-dom";

/**
 * Menu Navigation bar to navigate to different parts of the project
 * @returns 
 */
export function InternalNavigation() {
    return (
        <div className="Navigation">
            <div className="Navigation_branding">
                <NavLink to="/Attendees"><img src="/assets/HGDC_Logo_zoomed.png"/></NavLink>
            </div>            
            <div className="Navigation_links">
                <ul id="Navigation_list">
                    <li className="Navigation_link">
                        <h3><NavLink to="/Schedule" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Schedule</NavLink></h3>
                    </li>
                    {/* <li className="Navigation_link">
                        <h3><NavLink to="/Location" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Location</NavLink></h3>
                    </li> */}
                    <li className="Navigation_link">
                        <h3><NavLink to="/Logistics" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Logistics</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Policies" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Policies</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Resources" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Resources</NavLink></h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export function ExternalNavigation() {
    return (
        <div className="Navigation">
            <div className="Navigation_branding">
                <NavLink to="/"><img src="/assets/HGDC_Logo_zoomed.png"/></NavLink>
            </div>            
            <div className="Navigation_links">
                <ul id="Navigation_list">
                    {/* <li className="Navigation_link">
                        <h3><NavLink to="/History" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HGDC History</NavLink></h3>
                    </li>
                    <li className="Navigation_link">
                        <h3><NavLink to="/Past-Participants" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HGDC Past Participants</NavLink></h3>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
