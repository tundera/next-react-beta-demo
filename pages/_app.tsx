import type { AppProps } from 'next/app'

import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { ErrorBoundary } from 'react-error-boundary'

import FullPageSpinner from 'src/components/FullPageSpinner'
import RootErrorFallback from 'src/components/RootErrorFallback'

import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={() => router.reload()}>
      <Suspense fallback={<FullPageSpinner />}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default MyApp
