import styles from './Anchor.module.css';
import utils from './utils.module.css';

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
    <div className={hideBorder ? `${styles.container} ${styles.noLine}` : styles.container}>
      <p className={`${utils.monoText} ${utils.smallText}`}>{text}</p>
    </div>
  )
}