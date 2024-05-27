'use client'

import React from 'react'
import { IoCarSportOutline } from 'react-icons/io5'
import { useParamsStore } from '../hooks/useParamsStore'

export default function Logo() {
    const reset = useParamsStore(state => state.reset);
    return (
    <div onClick={reset}
        className='cursor-pointer flex items-center gap-2 text-2xl font-semibold text-emerald-600'>
        <IoCarSportOutline size={34}/>
        <div>BidWheels</div>
    </div>
  )
}
