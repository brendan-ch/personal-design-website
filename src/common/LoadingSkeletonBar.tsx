import styles from './LoadingSkeletonBar.module.css'
import { CSSProperties } from "react";

/**
 * Loading skeleton.
 * @param param0
 * @returns
 */
export default function LoadingSkeletonBar({ style }: {
  /**
   * Custom styling for the loading skeleton.
   */
  style: CSSProperties,
}) {
  return (
    <div className={styles.loadingSkeletonBar} style={style}>
    </div>
  )
}