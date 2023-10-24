import styles from './loading.module.css'
import utils from '../../../utils.module.css'
import { CSSProperties } from 'react'

function LoadingSkeletonBar({ style }: {
  style: CSSProperties,
}) {
  return (
    <div className={styles.loadingSkeletonBar} style={style}>
    </div>
  )
}

/**
 * Display a loading skeleton for the layout content component.
 * @returns
 */
export default function Loading() {
  console.log('Loading...');

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