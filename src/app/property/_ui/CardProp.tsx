"use client"

import Link from "next/link";
import {LuArrowRight} from "react-icons/lu";
import {memo} from "react";




type CardPropsT = { prop: PropertyT }



export const CardProp = memo(( { prop }: CardPropsT ) => {

  console.log('=> CardProp Rendered')


  return (

    <div className="card w-[150px] bg-base-100 shadow-xl">
      <figure>
        <img src="https://dummyimage.com/150x150/AAF4EE/000000" alt="property"/>
      </figure>
      <div className="card-body p-3 pt-2 gap-2 leading-tight">
        <div>
          <span className="card-title text-base text-balance font-normal leading-tight line-clamp-2 mb-0">
            {prop.title}
          </span>
          <p className='txt-tiny'> {prop.location} </p>
          <p className='txt-tiny'> {prop.bedrooms} beds | {prop.bathrooms} baths </p>
        </div>
        <p> ${prop.sale_price} </p>
        <div className="card-actions flex flex-row">
          <Link href={`/property/${prop.id}`}>
            <button className="btn btn-neutral w-full">
              view details <LuArrowRight/>
            </button>
          </Link>
        </div>
      </div>
    </div>

  )

})

CardProp.displayName = "CardProp"



