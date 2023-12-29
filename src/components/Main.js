import { InternalNavigation, ExternalNavigation } from "./Navigation";
import Footer from "./Footer";
import Content from "./Content";

export function InternalMain({pageName, children}) {
    return(
        <div className={pageName}>
            <InternalNavigation />
            <Content>
                <h2 className="PageTitle">{pageName}</h2>
                {children}
            </Content>
            <Footer/>
        </div>
    )
}

export function ExternalMain({pageName, children}) {
    return(
        <div className={pageName}>
            <ExternalNavigation />
            <Content>
                {children}
            </Content>
        </div>
    )
}
