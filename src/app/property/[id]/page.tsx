"use client"

import { usePropertyStore } from "@/store/property.store";
import { useEffect } from "react";
import { LuBath, LuBedDouble, LuCar, LuMail, LuRuler, LuUser, LuUserSquare } from "react-icons/lu";




export default function Details({ params }: { params: { id: string } }) {

  console.log("(page - property.Details.id) =>", params.id)
  const propIdUrl: number = parseInt(params.id)
  const {states: {properties}} = usePropertyStore()

  console.log("(page - property.Details.properties) =>", properties)
  const prop = properties.find( (prop) => prop.id === propIdUrl )
  const dateListedFormat = prop?.date_listed?.replaceAll("-", "/").slice(0, 10)


  useEffect(() => { usePropertyStore["persist"].rehydrate() }, [])


  return (

    <main className="flex flex-col sm:flex-row gap-10 my-4">


      <div className="fflex-col basis-8/12">
        {prop ? (

          <div className="fflex-col gap-4">

            <div className="fflex-col gap-2 mx-1">
              <div className="flex-between flex-wrap gap-y-2">
                <h3> { prop.title } </h3>
                <h3> { "$" + prop.sale_price } </h3>
              </div>
              <div className="flex-between">
                <p> { prop.location } </p>
                <p> Listed: { dateListedFormat } </p>
              </div>
            </div>

            <div className="flex w-full h-48 bg-neutral rounded-2xl"></div>

            <div className="flex flex-1">

              <div className="flex flex-1 stats shadow children:px-[0.5rem] sm:children:px-[1.5rem]">

                <div className="stat fflex-col-center">
                  <div className="stat-title text-accent/85">
                    <LuBedDouble size={22} />
                  </div>
                  <div className="stat-value"> {prop.bedrooms} </div>
                  <div className="stat-desc">bedrooms</div>
                </div>

                <div className="stat fflex-col-center">
                  <div className="stat-title text-accent/85">
                    <LuBath size={22}/>
                  </div>
                  <div className="stat-value"> {prop.bathrooms} </div>
                  <div className="stat-desc">bathrooms</div>
                </div>

                <div className="stat fflex-col-center">
                  <div className="stat-title text-accent/85">
                    <LuCar size={22}/>
                  </div>
                  <div className="stat-value"> {prop.parking} </div>
                  <div className="stat-desc">parking</div>
                </div>

                <div className="stat fflex-col-center">
                  <div className="stat-title text-accent/85">
                    <LuRuler size={22}/>
                  </div>
                  <div className="stat-value"> {prop.sqft} </div>
                  <div className="stat-desc">sqft</div>
                </div>

              </div>

            </div>


          </div>

        ) : (

          <div className="flex-center">
            <h3>Property with id {propIdUrl} does not exists.</h3>
          </div>

        )}
      </div>

      <div className="fflex-col basis-4/12 h-fit bg-base-100 gap-4 p-4 pb-6 rounded-2xl">

        <h3> Contact Agent </h3>

        <form className="fflex-col gap-4">
          <label className="flex-center input input-bordered min-w-40 gap-2">
            <LuUser size={18} />
            <input type="text" placeholder="Full Name" className="w-full" />
          </label>
          <label className="flex-center input input-bordered gap-2">
            <LuMail/>
            <input type="text" placeholder="Email" className="w-full" />
          </label>
          <label className="flex-center input input-bordered gap-2">
            <LuUserSquare/>
            <input type="number" placeholder="Phone"className="w-full" />
          </label>
          <textarea className="flex-center textarea textarea-bordered w-full" placeholder="comments"/>
          <button className="btn btn-accent opacity-50 w-full">Contact</button>
        </form>


      </div>


    </main>

  )
}