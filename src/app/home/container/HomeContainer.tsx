"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import reactpict from "@/../public/Reactpict.svg"
import phppict from "@/../public/phppict.svg"
import laravelpict from "@/../public/laravelpict.svg"
import nextpict from "@/../public/next.svg"
import kotlinpict from "@/../public/kotlinpict.svg"
import javapict from "@/../public/javapict.svg"


function hitungUmur(tanggalLahir: string): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(tanggalLahir);
    
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
    const dayDiff: number = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age;
}

export default function HomeContainer() {
    return (
    <>
        <div>
            <article>
                <section>
                <h2>About Me</h2>
                 <ol>
                    <li><b>Full Name:</b> Azarya Stefanus Lopulalan</li>
                    <li><b>TTL:</b> Bogor, 02 September 2003</li>
                    <li><b>umur:</b> {hitungUmur("2003-09-02")} Tahun</li>
                    <li><b>Tempat Tinggal:</b> Bogor</li>
                    <li><b>Pekerjaan:</b> Mahasiswa</li>
                    <li><b>Institusi:</b> Universitas Brawijaya</li>
                    <li><b>Jurusan:</b> Teknologi Informasi</li>
                    <li><b>Tahun Masuk:</b> 2022</li>
                    <li><b>Hobby:</b> Main Game</li>
                    <li><b>Makanan Favorite:</b> Indomie</li>
                 </ol>
                </section>

                <section>
                    <h2>Overview</h2>
                    <p>Halo perkenalkan nama saya adalah Azarya Stefanus Lopulalan, teman-teman saya kerap memanggil saya dengan Aza. saya lahir di Bogor pada 02 September 2003, dan saat ini saya berusia {hitungUmur("2003-09-02")} tahun. Saya tinggal di Bogor dan sedang menempuh pendidikan di Universitas Brawijaya jurusan Teknologi Informasi, sejak tahun 2022. Saya memiliki ketertarikan di dunia pemrograman, terutama dalam bidang pembuatan website. Framework yang sering saya gunakan dalam pengembangan web antara lain React.js, Next.js, dan Laravel. Selain itu, saya juga menguasai beberapa bahasa pemrograman lainnya, seperti Java, PHP, dan Kotlin, yang semakin memperkaya kemampuan saya dalam membangun berbagai aplikasi berbasis web dan mobile. dan dalam pembuatan laman web ini saya menggunakan framework Next js.</p>
                </section>

                <section>
                    <h2>My Favorite framework to code</h2>
                    <Marquee>
                    <Image src={reactpict} alt="PasFoto"/>
                    <Image src={phppict} alt="PasFoto"/>
                    {/* <Image src={javapict} alt="PasFoto"/> */}
                    {/* <Image src={kotlinpict} alt="PasFoto"/> */}
                    <Image src={nextpict} alt="PasFoto"/>
                    {/* <Image src={laravelpict} alt="PasFoto"/> */}
                    </Marquee>
                </section>

            </article>
        </div>
    </>);
}