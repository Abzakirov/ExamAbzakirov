import { Drawer } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { DrawerMenu, DrawerMenuPath } from "@/utils";
import { HeaderMenuType, toggle_menutype } from "@/@types";
import { useRouter } from "next/navigation";

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawers = ({ open, setOpen }: DrawerProps) => {
  const onClose = () => {
    setOpen(false);
  };
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose(); 
  };

  return (
    <div>
      <Drawer title="Menu" placement="left" onClose={onClose} open={open}>
        <div className="relative w-full mb-6">
          <input
            placeholder="Search for products..."
            className="rounded-full h-10 px-4 py-2 pl-10 w-full border border-gray-200 bg-gray-50"
          />
          <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Navigation</h3>
          <ul>
            {DrawerMenuPath.map((item: toggle_menutype) => (
              <button
                onClick={() => handleNavigation(item.path)}
                key={item.id}
                className="mb-2 flex flex-col gap-2"
              >
                {item.title}
              </button>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Categories</h3>
          <ul>
            {DrawerMenu.map((item: HeaderMenuType) => (
              <li key={item.id} className="mb-2">
                <button className="text-gray-700 hover:text-black">
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Drawers;
