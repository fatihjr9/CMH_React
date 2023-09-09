import PropTypes from 'prop-types'
import Navbar from "../components/navbar"
import Bar from "../components/bar"


function Wrapper({children}) {
  return (
    <div>
        <Navbar/>
        
        <div className='px-4 lg:px-20'>
            <section className="my-8">
              <h5 className="text-4xl font-semibold tracking-tighter">Today’s cryptocurrencies <br /> price by coindatahub</h5>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <Bar/>
              </div>
            </section>
            <section>
              {children}
            </section>
        </div>
    </div>
  )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper