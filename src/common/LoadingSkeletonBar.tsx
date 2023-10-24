import styles from './LoadingSkeletonBar.module.css'
import { CSSProperties } from "react";

export default function LoadingSkeletonBar({ style }: {
  style: CSSProperties,
}) {
  return (
    <div className={styles.loadingSkeletonBar} style={style}>
    </div>
  )
}