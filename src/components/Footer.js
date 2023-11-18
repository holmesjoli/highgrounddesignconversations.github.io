import { eventManager } from "../utils/global";

export default function Footer() {
    return(
        <div className="Footer">
            <div className="Contact">
                <div className="Text">
                    <h5>267.872.3311</h5>
                    <p>Steve Wilcox cell</p>
                </div>
                <div className="Text">
                    <h5>{eventManager.phone}</h5>
                    <p>{eventManager.managerName} cell</p>
                </div>
            </div>
            <div className="Address">
                <div className="Text">
                    <h5>171 County Road 74 Santa Fe, NM 85706</h5>
                    <p>Event Address</p>
                </div>
            </div>
        </div>
    )
}
