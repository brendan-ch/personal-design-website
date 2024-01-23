import { PropsWithChildren } from "react";
import styles from './DesktopOnlyWrapper.module.css'

interface Props extends PropsWithChildren {
  /**
   * Additional class names to apply to the container div.
   */
  className?: string,
}

/**
 * MDX wrapper component which only displays when the width expands beyond
 * a certain width.
 * @param param0
 */
export default function DesktopOnlyWrapper({ children, className }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}