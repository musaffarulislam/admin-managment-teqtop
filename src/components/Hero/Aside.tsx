import { AsideIcons } from './AsideIcons';

export const Aside = () => {
    return (
        <div className='mt-12 h-full w-16 sm:w-24 bg-blue flex flex-col items-center fixed pt-4 px-2'>
            <AsideIcons iconName='BiSolidHomeSmile' title='Dashboard' focus={false} />
            <AsideIcons iconName='RiUser3Fill' title='Sub admin' focus={true} />
            <AsideIcons iconName='RiMapPinUserLine' title='Vacation Expert' focus={false} />  
            <AsideIcons iconName='PiUsersFill' title='Custormer' focus={false} />  
            <AsideIcons iconName='RiBuildingFill' title='Countries' focus={false} />  
            <AsideIcons iconName='FaLayerGroup' title='Categories' focus={false} />  
            <AsideIcons iconName='MdOutlineMessage' title='Messsages' focus={false} />  
            <AsideIcons iconName='RiSettings5Fill' title='Settings' focus={false} />  
        </div>
    )
}
