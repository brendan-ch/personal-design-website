import styles from './HorizontalWrapper.module.css'

/**
 * MDX component which groups elements horizontally on desktop,
 * and vertically on mobile.
 * @param props
 * @returns
 */
export default function HorizontalWrapper(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={styles.horizontalWrapper} {...props}>
      {props.children}
    </div>
  )
}