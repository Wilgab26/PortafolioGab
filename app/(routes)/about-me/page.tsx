"use client"

import ContainerPage from "@/app/components/ContainerPage";
import TransitionPage from "@/app/components/TransitionPage";
import { Avatar } from "@/app/components/avatar";
import CounterServices from "@/app/components/counter-services";
import TimeLine from "@/app/components/time-line";



const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;