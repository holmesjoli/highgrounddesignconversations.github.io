import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Main({pageName, children}) {
    return(
        <div>
            <Navigation />
            <div className="Main">
                <div className="Content">
                    {/* <h3>{pageName}</h3> */}
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
