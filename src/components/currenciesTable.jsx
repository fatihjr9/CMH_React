
function CurrenciesTable() {
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
                  <tr className="bg-gray-50 border-b">
                      <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                          1
                      </th>
                      <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        <div className="flex flex-row gap-x-2 items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                          <div className="flex flex-col gap-y">
                            <h5 className="text-base font-medium">Bitcoin</h5>
                            <p className="text-sm font-normal text-gray-400">BTC</p>
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-3">
                        $25,777.41
                      </td>
                      <td className="px-6 py-3">
                        $502.09b
                      </td>
                      <td className="px-6 py-3">
                        $25,678.59
                      </td>
                      <td className="px-6 py-3">
                        19.48m
                      </td>
                      <td className="px-6 py-3">
                        $2.89b
                      </td>
                      <td className="px-6 py-3">
                        0.04%
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default CurrenciesTable