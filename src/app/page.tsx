"use client"

import { CardProp } from '@/app/property/_ui/CardProp';
import { CardPropLoading } from '@/app/property/_ui/CardPropLoading';
import { Range } from '@/components/ui/Range';
import { OptionT, Select } from '@/components/ui/Select';
import { usePropertyStore } from '@/store/property.store';
import { useEffect, useState } from 'react';




export default function Home() {

  const ops: OptionT[] = [
    { value: "1", text_val: "1" },
    { value: "2", text_val: "2" },
    { value: "3", text_val: "3" },
    { value: "4", text_val: "4" },
    { value: "5", text_val: "5" },
    { value: "6", text_val: "6" }
  ]

  const {states: {properties, isLoading}, actions } = usePropertyStore()
  const [bedrooms, setBedrooms] = useState<string>()
  const [bathrooms, setBathrooms] = useState<string>()
  const [parking, setParking] = useState<string>()
  const [salePrice, setSalePrice] = useState<string>()


  const filteredProps: PropertyT[] = ((): PropertyT[] => {

    let props: PropertyT[] = properties

    const propsFilter = (houseRoom: keyof PropertyT, valSelected: string|undefined) => {
      if (valSelected && valSelected !== "all") {
        if(houseRoom !== "sale_price") {
          props = props.filter((prop) => prop[`${houseRoom}`]?.toString() === valSelected)
        }
        else {
          const salePrice: number = Number(valSelected) * 100_000
          props = props.filter((prop) => Number(prop[`${houseRoom}`]) < salePrice)
        }
      }
    }
    propsFilter("bedrooms", bedrooms)
    propsFilter("bathrooms", bathrooms)
    propsFilter("parking", parking)
    propsFilter("sale_price", salePrice)
    return props
  })()


  useEffect(() => {
    usePropertyStore["persist"].rehydrate()?.then(() => {
      actions.getProperties()
    })
  }, [])



  return (

    <main>

      <div className="flex flex-wrap my-4 gap-4">

        <Select label="Bedrooms:" options={ops.slice(0, 5)} setVal={setBedrooms} />
        <Select label="Bathrooms:" options={ops.slice(0, 4)} setVal={setBathrooms} />
        <Select label="Parking:" options={ops} setVal={setParking} />
        <Range label="Price Range:" start="$100k" end="$1MM" setVal={setSalePrice} />

      </div>

      <div className="flex-evenly flex-wrap max-w-[1000px]
          mx-auto my-16 gap-x-3 gap-y-6 xs:gap-x-6 xs:gap-y-8">

        {(isLoading !== false) ? (
          [...Array(5)].map((_, i) => (
            <CardPropLoading key={i}/>
          ))
        ) : (
          filteredProps.map((prop) => (
            <CardProp key={prop.id} prop={prop}/>
          ))
        )}

      </div>

    </main>

  )
}
