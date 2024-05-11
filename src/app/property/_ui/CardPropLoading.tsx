


export function CardPropLoading() {

  return (
    <div className="fflex-col skeleton bg-base-300 gap-4 w-[150px] h-full animate-pulse">
        <div className="skeleton bg-base-100 h-[150px] w-full rounded-b-none"></div>
      <div className="fflex-col children:bg-base-100 gap-4 p-4">
        <div className="skeleton  h-4 w-20"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  )
}