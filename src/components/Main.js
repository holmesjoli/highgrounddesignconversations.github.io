import Navigation from "./Navigation";
import Footer from "./Footer";
import Content from "./Content";

export default function Main({pageName, children}) {
    return(
        <div>
            <Navigation />
            <Content>
                {children}
            </Content>
            <Footer/>
        </div>
    )
}
