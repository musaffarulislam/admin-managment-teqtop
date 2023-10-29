import { LeftSide } from '../components/Navbar/LeftSide';
import { RightSide } from '../components/Navbar/RightSide';

export const Navbar = () => {
  return (
    <div className='h-12 drop-shadow-md bg-primary flex justify-between items-center sm:px-4 md:px-8 lg:px-12 fixed top-0 left-0 right-0 z-20'>
        <LeftSide />
        <RightSide />
    </div>
  )
}
