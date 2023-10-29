import { Aside } from '../components/Hero/Aside'
import { Main } from '../components/Hero/Main'

export const Hero = () => {
  return (
    <div className='flex max-h-screen bg-background'>
        <Aside />
        <Main />
    </div>
  )
}
