import { useEffect, useState } from "react";
import useStore from "../../store"

function CurrenciesTable() {
  const { dataCurrencies, fetchCurrencies } = useStore();
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  return (
    <div>
      <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase border-y">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          #
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Market Cap
                      </th>
                      <th scope="col" className="px-6 py-3">
                          VWAP (24hr)
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Supply
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Volume (24hr)
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Change (24hr)
                      </th>
                  </tr>
              </thead>
              <tbody>
                {dataCurrencies.slice(0, limit).map((currency) => (
                  <tr key={currency.id} className="bg-gray-50 border-b">
                    <th scope="row" key={currency.id} className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                      {currency.rank}
                    </th>
                    <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                        <div className="flex flex-col gap-y">
                          <h5 className="text-base font-medium">{currency.name}</h5>
                          <p className="text-sm font-normal text-gray-400">{currency.symbol}</p>
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-3">
                      {currency.priceUsd}
                    </td>
                    <td className="px-6 py-3">
                      {currency.marketCapUsd}
                    </td>
                    <td className="px-6 py-3">
                      {currency.vwap24Hr}
                    </td>
                    <td className="px-6 py-3">
                      {currency.supply}
                    </td>
                    <td className="px-6 py-3">
                      {currency.volumeUsd24Hr}
                    </td>
                    <td className="px-6 py-3">
                      {currency.changePercent24Hr}%
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
        {limit < dataCurrencies.length && (
            <button
              onClick={() => setLimit(limit + 10)}
              className="block mx-auto my-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Load More
            </button>
        )}
    </div>
  )
}

export default CurrenciesTable