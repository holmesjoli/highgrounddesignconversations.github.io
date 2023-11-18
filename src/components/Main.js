import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Main({children}) {
    return(
        <div className="Main">
            <Navigation />
            <div className="Content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
