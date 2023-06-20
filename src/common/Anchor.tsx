import styles from './Anchor.module.css';
import utils from '../app/utils.module.css';

interface Props {
  text: string,
  // href?: string,
  hideBorder?: boolean,
}

/**
 * Anchor element which can be used as a heading.
 * Note that on screen readers, this component takes precedence over other heading elements.
 * 
 * @param param0
 * @returns
 */
export default function Anchor({
  text,
  // href,
  hideBorder,
}: Props) {
  return (
    <div className={hideBorder ? `${styles.container} ${styles.noLine}` : styles.container} role="heading" aria-level={1}>
      <p className={`${utils.monoText} ${utils.smallText}`}>{text}</p>
    </div>
  )
}