import { Link } from "react-router-dom"

function Banner() {
  return (
    <div className="w-full overflow-hidden py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <p className="text-sm text-center scrolled font-normal text-white">We only shows update coin market, and doesnt provide transaction. try to visit <Link to="https://coinmarketcap.com/" target="_blank" className="underline underline-offset-1">coinmarketcap</Link> or <Link to="https://www.binance.com/" target="_blank" className="underline underline-offset-1">binance</Link></p>
    </div>
  )
}

export default Banner