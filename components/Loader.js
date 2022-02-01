import React from 'react'
// import loading from '../components/loading.gif'

export default function Loader() {
    return (
        <div className="absolute top-[51px] right-[310px] text-white w-[80px]">
            <img src="loading.svg" alt="loading" />
        </div>
    )
}