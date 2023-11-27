import Main from "../components/Main";

import { eventManager, gateCode } from "../utils/global";

const logistics = [
                // {header: "Logistics", p: ""},
                   {header: "General Behavior", p: "Since we are having 30 people in a VRBO designated for 12 people in a residential area, we need to keep a low profile so the neighbors do not complain and the property manager does not evict us. Out of respect for the neighbors, we need to minimize our visibility, traffic and noise. No parking on the roadside and avoid walking, hiking or running on the road."},
                   {header: "Parking", p: "Only park inside the gate and not on the road. People staying on property have parking priority. Please observe the cones and parking manager instructions. When the parking areas on property are full, parking managers will direct you to the overflow lot down the road at the intersection and you will be picked up by the shuttle."},
                   {header: "Event Description", p: "Be prepared to give a simple consistent explanation to any neighbors you encounter. We need to make it clear that HGDC is not an “event” with noisy entertainment; we're just a modest casual gathering of academic colleagues."},
                   {header: "Thursday Night", p: "On Thursday night, only those staying overnight on property or helping set up should come to the house."},
                   {header: "Camping", p: "No tent camping. Ample space is available on the decks for mats and sleeping bags."},
                   {header: "Fire Safety", p: "No smoking outside or inside the house, or on the surrounding grounds."},
                   {header: "Gate Access Code and Wifi Code", p: `${gateCode}. The code will also be visible somewhere near the keypad.`},
                   {header: "Emergencies", p: "Call 911. The address is 171 County Road 74 (Lower Pacheco Canyon Road) just north of Tesuque Village."},
                   {header: "Refreshments", p: "We will provide some sodas and beer. Please use your HG water bottle which we will provide, and bring your own favorite beer, wine and other refreshments. You each will have a coffee mug with your name on the bottom, which you should wash yourself and reuse."},
                   {header: "Set-up and clean-up", p: "Wash and track your mug and water bottle, and return your plastic utensils to the kitchen for washing. Place your empty aluminum cans in the large black trash bags designated for recycling. General trash goes in the other large black trash bags."},
                   {header: "HGDC Scholars", p: `The HGDC Event Manager, ${eventManager.name}, will be directing our High Ground Scholars crew to set up refreshment breaks and lunch, and provide kitchen clean-up. HGDC participants assistance allows our scholars maximum time in the HGDC sessions; please sign up for a slot on the volunteer sheet.`}]

export default function Logistics() {
    return(
        <Main pageName="Logistics">
            {logistics.map((d, i) => 
                <div className="Text" key={i}>
                    <h4>{d.header}</h4>
                    <p>{d.p}</p>
                </div>)}
        </Main>
    )
}

