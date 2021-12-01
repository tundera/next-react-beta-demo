import { Suspense, SuspenseProps } from 'react'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from 'src/components/ErrorFallback'

type SuspenseBoundaryProps = SuspenseProps

const SuspenseBoundary = ({ fallback, children }: SuspenseBoundaryProps) => {
  const router = useRouter()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => router.reload()}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseBoundary
