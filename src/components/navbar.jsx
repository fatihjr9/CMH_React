import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "./banner";
import { CgMenuMotion } from 'react-icons/cg'
import { Input, Dropdown, Button, Drawer } from 'antd';

const Navbar = () => {
      const location = useLocation()
      const [open, setOpen] = useState(false);
      const [placement] = useState('top');
      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
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
            <div className="border-b border-slate-100 py-4">
              {/* Website */}
                <div className="hidden lg:grid grid-cols-2 px-5 lg:px-20">
                  <div className="md:flex flex-row items-center gap-x-6">
                      <h5 className="text-xl font-semibold tracking-tighter">CoinDataHub</h5>
                      <div className="flex flex-row items-center gap-x-4">
                          <Link className={`text-sm text-gray-500 hover:text-black ${location.pathname === '/' ? 'font-medium text-black' : 'hover:font-medium'}`} to="/">Cryptocurrencies</Link>
                          <Link className={`text-sm text-gray-500 hover:text-black ${location.pathname === '/exchanges' ? 'font-medium text-black' : 'hover:font-medium'}`} to="/exchanges">Exchanges</Link>
                      </div>
                  </div>
                  <div className="md:flex flex-row items-center gap-x-2 ms-auto">
                      <Input placeholder="Search Cryptocurrencies or exchanges"/>
                      <Dropdown menu={menuProps}>
                        <Button>USD</Button>
                      </Dropdown>
                      <Dropdown menu={menuProps}>
                        <Button>English</Button>
                      </Dropdown>
                  </div>
                </div>
              {/* Mobile */}
                <div className="grid lg:hidden grid-cols-2 px-5 lg:px-20 items-center">
                  <h5 className="text-xl font-semibold tracking-tighter">CoinDataHub</h5>
                  <button onClick={showDrawer} className="ms-auto text-xl border p-2 rounded-md"><CgMenuMotion/></button>
                  <Drawer placement={placement} closable={false} onClose={onClose} open={open} key={placement}>
                    <Input placeholder="Search Cryptocurrencies or exchanges"/>
                    <div className="flex flex-col items-start gap-x-4">
                      <Link to="/" className="text-lg">Cryptocurrencies</Link>
                      <Link to="/exchanges" className="text-lg text-gray-400">Exchanges</Link>
                    </div>
                  </Drawer>
                </div>
            </div>
        </>
    );
}

export default Navbar;
