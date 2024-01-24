import Link from 'next/link';
import styles from './ActionButton.module.css';

interface Props {
  /**
   * Text to display within the action button.
   */
  text: string,
  /**
   * Callback for when the button is clicked.
   * @returns
   */
  onClick?: () => any,
  /**
   * Link to navigate to when the button is clicked.
   * Overrides `onClick` if provided.
   */
  href?: string,
  /**
   * If set to true, the component will render an `<a>` element
   * instead of a Next.js `<Link>` element.
   */
  useRegularLink?: boolean,
  /**
   * Whether the action button should be highlighted.
   */
  highlighted?: boolean,
  /**
   * Whether the action button is disabled.
   */
  disabled?: boolean,
}

/**
 * Action button which signals the user to do something.
 * @param param0
 * @returns
 */
export default function ActionButton({ text, onClick, href, useRegularLink, highlighted, disabled }: Props) {
  let className = `${styles.container}`;
  if (highlighted) {
    className += ` ${styles.highlighted}`;
  }
  if (disabled) {
    className += ` ${styles.disabled}`;
  }

  if (href && !useRegularLink) {
    return (
      (<Link href={href} className={className}>

        <p>
          {text}
        </p>

      </Link>)
    );
  } else if (href) {
    return (
      <a href={href} className={className} rel="noreferrer" target="_blank">
        <p>
          {text}
        </p>
      </a>
    )
  }

  return (
    <button
      className={className}
      onClick={disabled ? undefined : onClick}
    >
      <p>
        {text}
      </p>
    </button>
  );
}