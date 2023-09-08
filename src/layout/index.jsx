import PropTypes from 'prop-types'
import Navbar from "../components/navbar"


function Wrapper({children}) {
  return (
    <div>
        <Navbar/>
        <div className='px-4 lg:px-20 my-8'>
            {children}
        </div>
    </div>
  )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper