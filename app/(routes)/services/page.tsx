import TransitionPage from "@/app/components/TransitionPage";
import AvatarServices from "@/app/components/avatar-services";
import CircleImage from "@/app/components/circle-image";
import SliderServices from "@/app/components/slider-services";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> skills.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend y backend. Especializados en
                     la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando tecnologías y frameworks actualizados.
                     Diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;