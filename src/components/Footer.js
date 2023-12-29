import { eventAddress, eventManager } from "../utils/global";

export default function Footer() {
    return(
        <div className="Footer">
            <div className="Contact">
                <div className="Text">
                    <h5>267.872.3311</h5>
                    <p>Steve Wilcox</p>
                </div>
                <div className="Text">
                    <h5>{eventManager.phone}</h5>
                    <p>{eventManager.managerName}</p>
                </div>
            </div>
            <div className="Event">
                <div className="Text">
                    <h5>{eventAddress}</h5>
                    <p>Event Address</p>
                </div>
            </div>
        </div>
    )
}
