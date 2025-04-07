import { FaReact } from 'react-icons/fa';
import {
    SiJavascript,
    SiNodedotjs,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiSass,
    SiNextdotjs,
    SiAstro,
    SiVuedotjs,
    SiWordpress,
    SiJoomla,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiGithub,
    SiGit,
    SiFigma,
    SiPhp,
    SiVite,
    SiDotnet
} from 'react-icons/si';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HabilidadesyTecnologias() {
    const sliderSettings = {
        infinite: true,
        speed: 400, // Adjusted to match 19s animation
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
    };

    const skills = [
        { icon: FaReact, color: "text-blue-500" },
        { icon: SiJavascript, color: "text-yellow-500" },
        { icon: SiTypescript, color: "text-blue-600" },
        { icon: SiHtml5, color: "text-orange-500" },
        { icon: SiCss3, color: "text-blue-500" },
        { icon: SiSass, color: "text-pink-500" },
        { icon: SiTailwindcss, color: "text-teal-500" },
        { icon: SiBootstrap, color: "text-purple-500" },
        { icon: SiNextdotjs, color: "text-black" },
        { icon: SiAstro, color: "text-orange-500" },
        { icon: SiVuedotjs, color: "text-green-600" },
        { icon: SiNodedotjs, color: "text-green-500" },
        { icon: SiDotnet, color: "text-purple-700" },
        { icon: SiWordpress, color: "text-blue-700" },
        { icon: SiJoomla, color: "text-red-600" },
        { icon: SiMysql, color: "text-gray-600" },
        { icon: SiPostgresql, color: "text-blue-400" },
        { icon: SiFirebase, color: "text-yellow-500" },
        { icon: SiGithub, color: "text-gray-800" },
        { icon: SiGit, color: "text-red-500" },
        { icon: SiFigma, color: "text-purple-600" },
        { icon: SiPhp, color: "text-indigo-600" },
        { icon: SiVite, color: "text-purple-500" }
    ];

    return (
        <section id="Habilidades & Tecnologías" className="py-24 bg-white w-full">
            <div className="container mx-auto px-4 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 pt-14">
                    Habilidades & Tecnologías
                </h2>

                <div className="mb-12">
                    <Slider {...sliderSettings}>
                        {skills.map(({ icon: Icon, name, color }) => (
                            <div key={name} className="flex flex-col items-center justify-center h-32 px-2">
                                <Icon className={`${color} text-5xl mb-2`} />
                                <p className="text-md font-medium">{name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default HabilidadesyTecnologias;