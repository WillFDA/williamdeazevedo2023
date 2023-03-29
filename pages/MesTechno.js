import React from "react";
import TechnoComponents from "./components/TechnoComponents";
import {FiGithub} from 'react-icons/fi'
import {FaReact, FaSass} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {IoLogoCss3} from 'react-icons/io'
export default function MesTechno() {
    return (
        <>
        <div className="my-10">
            <h1 className="font-Inter font-bold text-4xl text-center mb-10 mt-24">Mes technologies</h1>
            <div className="flex basis-1/3 justify-center items-center gap-10 round">
            <TechnoComponents title='Front-end' paragraph='Technologies que j’ai appris au cours de ma formation et en autodidacte.'
            icons={[
                {component: <IoLogoCss3 />,color: '#264DE4',},
                {component: <FaReact />, color :'#61DBFB'},
                {component: <FaSass />, color :'#CD669A'},
                {component: <SiTailwindcss />, color :'#06B6D4'},
                {component: <TbBrandNextjs />, color :'#FFFFFF'}
            ]}
            />
            <TechnoComponents title='Front-end' paragraph='Technologies que j’ai appris au cours de ma formation et en autodidacte.'
            icons={[
                {component: <IoLogoCss3 />, color: '#264DE4'},
                {component: <FaReact />, color :'#61DBFB'},
                {component: <FaSass />, color :'#CD669A'},
                {component: <SiTailwindcss />, color :'#06B6D4'},
                {component: <TbBrandNextjs />, color :'#FFFFFF'}
            ]}
            />
            <TechnoComponents title='Front-end' paragraph='Technologies que j’ai appris au cours de ma formation et en autodidacte.'
            icons={[
                {component: <IoLogoCss3 />, color: '#264DE4'},
                {component: <FaReact />, color :'#61DBFB'},
                {component: <FaSass />, color :'#CD669A'},
                {component: <SiTailwindcss />, color :'#06B6D4'},
                {component: <TbBrandNextjs />, color :'#FFFFFF'}
            ]}
            />
            </div>
        </div>
        </>
    )
}