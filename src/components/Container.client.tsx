import type { FC } from 'react'

import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

const Container: FC = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-col">
        <Navbar />
        <main
          id="skip"
          className="flex flex-col items-center justify-center w-full min-h-screen px-16 py-16 bg-gray-200 dark:bg-gray-700"
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Container
