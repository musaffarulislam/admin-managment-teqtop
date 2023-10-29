import React from 'react'
import { BiSolidHomeSmile } from 'react-icons/bi';
import { RiUser3Fill, RiMapPinUserLine, RiBuildingFill, RiSettings5Fill } from 'react-icons/ri';
import { PiUsersFill } from 'react-icons/pi';
import { FaLayerGroup } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';

interface propstypes {
    iconName: string;
    title: string;
    focus: boolean;
}

export const AsideIcons = ({iconName, title, focus}:propstypes) => {
    const renderIcon = (iconName: string) => {
        switch (iconName) {
          case 'BiSolidHomeSmile':
            return <BiSolidHomeSmile className="h-full w-full" />;
          case 'RiUser3Fill':
            return <RiUser3Fill className="h-full w-full" />;
          case 'RiMapPinUserLine':
            return <RiMapPinUserLine className="h-full w-full" />;
          case 'PiUsersFill':
            return <PiUsersFill className="h-full w-full" />;
          case 'RiBuildingFill':
            return <RiBuildingFill className="h-full w-full" />;
          case 'FaLayerGroup':
            return <FaLayerGroup className="h-full w-full" />;
          case 'MdOutlineMessage':
            return <MdOutlineMessage className="h-full w-full" />;
          case 'RiSettings5Fill':
            return <RiSettings5Fill className="h-full w-full" />;
          default:
            return null;
        }
    };

    return (
        <div className={`my-3 text-white ${focus ? "opacity-100" : "opacity-50"} flex flex-col items-center cursor-pointer hover:bg-white hover:bg-opacity-20 hover:rounded-md`}>
            <div className={`w-7 h-7 p-1 my-1 ${focus && "bg-white bg-opacity-20 rounded-md"}`}>
                {renderIcon(iconName)}
            </div>
            <div className='text-xs text-center hidden md:block'>{title}</div>
        </div>
    )
}
