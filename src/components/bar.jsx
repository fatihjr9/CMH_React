
function Bar() {
  return (
    <>
        <div className="ring-1 ring-gray-200 px-6 py-3 rounded-md flex flex-row justify-between">
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">$1.05T</h5>
            <p className="text-sm font-normal text-gray-400">Market Cap</p>
          </div>
          <hr className="rotate-180 border border-gray-200 h-auto"/>
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">$14.78B</h5>
            <p className="text-sm font-normal text-gray-400">Exchanges vol</p>
          </div>
          <hr className="rotate-180 border border-gray-200 h-auto"/>
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">2,296</h5>
            <p className="text-sm font-normal text-gray-400">Assets</p>
          </div>
          <hr className="rotate-180 border border-gray-200 h-auto"/>
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">73</h5>
            <p className="text-sm font-normal text-gray-400">Exchanges</p>
          </div>
          <hr className="rotate-180 border border-gray-200 h-auto"/>
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">9414</h5>
            <p className="text-sm font-normal text-gray-400">Markets</p>
          </div>
        </div>
    </>
  )
}

export default Bar