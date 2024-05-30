import React from 'react'

type Props = {
    amount?: number
    reserverPrice: number
}
export default function CurrentBid({amount, reserverPrice}: Props) {
    const text = amount ? 'R' + amount : 'No Bids';
    const color = amount ? amount > reserverPrice ? 'bg-green-600' : 'bg-amber-600' : 'bg-red-600'

    return (
        <div className={`
            border-2 border-white text-white py-1 px-2 rounded-lg flex
            justify-center ${color}
            `}>
                {text}
        </div>
    )
}
