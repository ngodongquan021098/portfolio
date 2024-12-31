import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { PacmanLoader } from 'react-spinners'

export const Loading: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.main)

  return (
    <>
      {isLoading && (
        <div className='w-screen h-screen fixed top-0 bg-bg-loading flex justify-center items-center z-[9999]'>
          <PacmanLoader color={'var(--color-text-special)'}></PacmanLoader>
        </div>
      )}
    </>
  )
}
