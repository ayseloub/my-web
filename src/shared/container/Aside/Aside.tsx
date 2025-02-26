import { NextPage } from "next";
import Image from "next/image";
import PasFoto from "@/../public/PassFoto.jpg"

const Aside: NextPage = () => {
    return(
        <aside>
            <Image 
                src={PasFoto}
                alt="PasFoto"
            />
            <div>
                <h3>Azarya Stefanus Lopulalan</h3>
                <p>Website Owner</p>
            </div>
        </aside>
    )
};

export default Aside;