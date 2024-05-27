'use client'

import React from 'react'
import { IoCarSportOutline } from 'react-icons/io5'
import { useParamsStore } from '../hooks/useParamsStore'
import { usePathname, useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();
    const reset = useParamsStore(state => state.reset);

    function doReset() {
      if (pathname !== '/') router.push('/');
      reset();
    }
    return (
    <div onClick={doReset}
        className='cursor-pointer flex items-center gap-2 text-2xl font-semibold text-emerald-600'>
        <IoCarSportOutline size={34}/>
        <div>BidWheels</div>
    </div>
  )
}
