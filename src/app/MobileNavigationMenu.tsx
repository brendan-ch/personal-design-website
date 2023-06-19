'use client'

import Link from 'next/link';
import styles from './MobileNavigationMenu.module.css';
import utils from './utils.module.css';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Exit from '@/icons/Exit';

interface ButtonProps {
  toggled?: boolean,
  text: string,
  href: string,
}

export function MobileNavMenuButton({ toggled, text, href }: ButtonProps) {
  return (
    (<Link href={href} className={styles.buttonWrapper}>

      <div className={styles.buttonTextContainer}>
        <h1 className={toggled ? styles.red : undefined}>
          <b>
            {text}
          </b>
        </h1>
      </div>

    </Link>)
  );
}

interface Props {
  visible: boolean,
  onClose: () => any,
}

/**
 * Navigation menu that displays a list of links.
 * @param props
 * @returns
 */
export default function MobileNavigationMenu({ visible, onClose }: Props) {
  const pathname = usePathname()

  return (
    <div
      className={!visible ? `${styles.container} ${styles.containerInvisible}` : `${styles.container} ${styles.containerVisible}`}
      role="menu"
    >
      <div className={styles.contentContainer}>
        {/* <MobileNavigationBar
          style={{
            zIndex: 4,
            position: 'relative',
          }}
          hideLogo
        /> */}
        <div className={`${utils.mobileNavContent} ${utils.mobileNavContentWithoutLogo}`}>
          <button>
            <Exit
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className={styles.buttons}>
          <MobileNavMenuButton
            toggled={pathname === '/'}
            text="Featured Works"
            href="/"
          />
          <MobileNavMenuButton
            toggled={pathname === '/ui-ux-design'}
            text="UI/UX Design"
            href="/ui-ux-design"
          />
          <MobileNavMenuButton
            toggled={pathname === '/graphic-design'}
            text="Graphic Design"
            href="/graphic-design"
          />
          <MobileNavMenuButton
            toggled={pathname === '/wip'}
            text="Work in Progress"
            href="/wip"
          />
        </div>
        <Footer
          onNoteOpen={() => { }}
        />
      </div>
    </div>
  );
}