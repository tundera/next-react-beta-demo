import LoadingSpinner from 'src/components/LoadingSpinner'

const FullPageSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <LoadingSpinner />
    </div>
  )
}

export default FullPageSpinner
