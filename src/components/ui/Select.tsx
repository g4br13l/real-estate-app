"use client"

import { Dispatch, HTMLAttributes, SetStateAction } from 'react';




export type OptionT = {value: string, text_val: string}

type SelectPropsT = {
  label: string,
  options: OptionT[],
  setVal: Dispatch<SetStateAction<string | undefined>>,
} & HTMLAttributes<HTMLSelectElement>



export function Select( { label, options, setVal }: SelectPropsT ) {

  return (

    <div className="fflex-col flex-1 min-w-32 max-w-64">

      <div className="label">
        <span className="label-text"> {label} </span>
      </div>

      <select defaultValue="select" onChange={(e) => setVal(e.target.value)}
              className="select select-bordered w-full max-w-xs">

        <option value="select" disabled>select...</option>

        {options?.map((opt, idx) => (
          <option key={idx} value={opt.value}> {opt.text_val} </option>
        ))}

        <option value="all"> all </option>

      </select>

    </div>

  )
}