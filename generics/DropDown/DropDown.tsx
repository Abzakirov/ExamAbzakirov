"use client";

import { toggle_menu } from "@/utils";
import { Button, Dropdown, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import React from "react";

const DropDowns = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems: MenuProps["items"] = toggle_menu.map((item) => ({
    key: item.id.toString(),
    label: (
      <Button onClick={() => router.push(item.path)} block>
        {item.title}
      </Button>
    ),
  }));

  const currentPage =
    toggle_menu.find((item) => item.path === pathname)?.title || "Shop";

  return (
    <div className="max-[337px]:hidden">
      <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
        <span
          className="font-medium cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          {currentPage} <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default DropDowns;
