import { Link } from "react-router-dom";
import Banner from "./banner";
import { Input, Dropdown, Button } from 'antd';

const Navbar = () => {
      const handleMenuClick = (e) => {
        console.log('click', e);
      };
      const items = [
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
          danger: true,
        },
        {
          label: '4rd menu item',
          key: '4',
          danger: true,
          disabled: true,
        },
      ];
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <>
            <Banner/>
            <div className="border-b border-slate-100 py-4 grid grid-cols-2 px-5 lg:px-20">
                <div className="md:flex flex-row items-center gap-x-6">
                    <h5 className="text-xl font-semibold tracking-tighter">CoinDataHub</h5>
                    <div className="flex flex-row items-center gap-x-4">
                        <Link to="/" className="text-sm">Cryptocurrencies</Link>
                        <Link to="/exchanges" className="text-sm text-gray-400">Exchanges</Link>
                    </div>
                </div>
                <div className="md:flex flex-row items-center gap-x-2 ms-auto">
                    <Input placeholder="Search"/>
                    <Dropdown menu={menuProps}>
                      <Button>USD</Button>
                    </Dropdown>
                    <Dropdown menu={menuProps}>
                      <Button>English</Button>
                    </Dropdown>
                </div>
            </div>
        </>
    );
}

export default Navbar;
