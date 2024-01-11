import styles from './HorizontalWrapper.module.css'

export default function HorizontalWrapper(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={styles.horizontalWrapper} {...props}>
      {props.children}
    </div>
  )
}