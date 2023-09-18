import { useEffect } from "react";
import useStore from "../../store"

function Bar() {
  const totalMarketCap = useStore((state) => state.calculateTotalMarketCap());
 
  // configure format
  const formattedMarketCap = (marketCap) => {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(2)}M`;
    } else {
      return `${marketCap.toFixed(2)}`;
    }
  };
  
  useEffect(() => {
    useStore.getState().fetchCurrencies();
  }, []);

 
  return (
    <>
        <div className="ring-1 ring-gray-200 px-3 lg:px-6 py-3 rounded-md flex flex-row justify-between">
          <div className="flex flex-col gap-y text-center">
            <h5 className="text-lg font-semibold">${formattedMarketCap(totalMarketCap)}</h5>
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