import styles from './Anchor.module.css';
import utils from '../app/utils.module.css';

interface Props {
  text: string,
  // href?: string,
  hideBorder?: boolean,
}

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