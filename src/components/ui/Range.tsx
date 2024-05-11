import { Dispatch, SetStateAction } from 'react';



type RangePropsT = {
  label: string,
  start: string,
  end: string,
  setVal: Dispatch<SetStateAction<string|undefined>>,
}


export function Range( { label, start, end, setVal }: RangePropsT ) {

  return (

    <div className="fflex-col flex-1 min-w-32 max-w-64">
      <div className="label">
        <span className="label-text"> {label} </span>
      </div>
      <input type="range" min={0} max={10} className="range range-xs"
              onChange={(e)=> setVal(e.target.value)} />
      <div className="w-full flex justify-between text-xs text-base-content/50 px-2">
        {[...Array(10)].map((_, i) => (<span key={i}>|</span>))}
      </div>
      <div className="flex-between text-base-content txt-tiny">
        <span> {start} </span>
        <span> {end} </span>
      </div>
    </div>

  )
}