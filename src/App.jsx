import Bar from "./components/bar"
import CurrenciesTable from "./components/currenciesTable"
import Wrapper from "./layout"

function App() {
  return (
    <Wrapper>
      <section className="my-8">
        <h5 className="text-4xl font-semibold tracking-tighter">Today’s cryptocurrencies <br /> price by coindatahub</h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <Bar/>
        </div>
      </section>
      <CurrenciesTable/>
    </Wrapper>
  )
}

export default App