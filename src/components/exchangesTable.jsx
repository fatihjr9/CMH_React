import { useEffect, useState } from "react";
import useStore from "../../store";

function ExchangesTable() {
  const { dataExchanges, fetchExchanges } = useStore();
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchExchanges();

    const timer = setInterval(() => {
      fetchExchanges();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [fetchExchanges]);

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
                Trading Pair
              </th>
              <th scope="col" className="px-6 py-3">
                Volume (24hr)
              </th>
              <th scope="col" className="px-6 py-3">
                Total (%)
              </th>
            </tr>
          </thead>
          <tbody>
            {dataExchanges.slice(0, limit).map((exc) => (
              <tr key={exc.rank} className="bg-gray-50 border-b">
                <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {exc.rank}
                </th>
                <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                  <h5 className="text-base font-medium">{exc.name}</h5>
                </td>
                <td className="px-6 py-3">{exc.tradingPairs}</td>
                <td className="px-6 py-3">{exc.volumeUsd}</td>
                <td className="px-6 py-3">{exc.percentTotalVolume}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {limit < dataExchanges.length && (
        <button
          onClick={() => setLimit(limit + 10)}
          className="block mx-auto my-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default ExchangesTable;
