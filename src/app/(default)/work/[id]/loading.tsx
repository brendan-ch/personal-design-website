import styles from './loading.module.css'
import LoadingSkeletonBar from '@/common/LoadingSkeletonBar'

/**
 * Display a loading skeleton for the page content inside the layout.
 * Note this only wraps the content inside `page.tsx`
 * and not the layout.
 * @returns
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */
export default function Loading() {
  return (
    <div className={styles.loadingMockChildren}>
      <div className="workIntercepted"></div>
      <LoadingSkeletonBar style={{
        height: 800,
      }} />
      <LoadingSkeletonBar style={{
        height: 800,
      }} />
    </div>
  )
}