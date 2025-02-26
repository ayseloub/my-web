import Footer from "@/shared/container/footer/Footer";
import HomeContainer from "./container/HomeContainer";
import Header from "@/shared/container/header/Header";
import Aside from "@/shared/container/Aside/Aside";

export default function Home() {
    return(
        <>
            <Header/>
            <main>
                <HomeContainer/>
                <Aside/>
            </main>
            <Footer/>
        </>
    )
}