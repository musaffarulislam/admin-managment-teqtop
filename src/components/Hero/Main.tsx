import { Heading } from './Heading';
import { DataTables } from './DataTables';

export const Main = () => {
    return (
        <div className='ml-16 sm:ml-24 mt-12 h-full w-full bg-background p-2 pb-0'>
            <div className='w-full h-full bg-primary drop-shadow-md rounded-md p-4'>
                <Heading />
                <hr className='my-3 text-gray' />
                <DataTables /> 
            </div>
        </div>
    )
}
