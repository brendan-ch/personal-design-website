'use client'

import Link from 'next/link';
import styles from './MobileNavigationMenu.module.css';
import utils from '../utils.module.css';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Exit from '@/icons/Exit';
import { useState } from 'react';
import WelcomeOverlay from './WelcomeOverlay';
import { Page } from './DesktopSideNavigation';

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
  pages: Page[],
}

/**
 * Navigation menu that displays a list of links. Also contains the welcome note.
 * @param props
 * @returns
 */
export default function MobileNavigationMenu({ visible, onClose, pages }: Props) {
  const [noteVisible, setNoteVisible] = useState(false)
  
  const pathname = usePathname()

  return (
    <div
      data-testid="mobileNavigationMenu"
      className={!visible ? `${styles.container} ${styles.containerInvisible}` : `${styles.container} ${styles.containerVisible}`}
      role="dialog"
    >
      <WelcomeOverlay
        visible={noteVisible}
        onClose={() => {
          setNoteVisible(false)
          onClose()
        }}
      />
      <div className={styles.contentContainer}>
        {/* <MobileNavigationBar
          style={{
            zIndex: 4,
            position: 'relative',
          }}
          hideLogo
        /> */}
        <div className={`${utils.mobileNavContent} ${utils.mobileNavContentWithoutLogo}`}>
          <button className={utils.mobileNavContentButton} onClick={onClose}>
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
          {pages.map(({ href, title }) => (
            <MobileNavMenuButton
              toggled={pathname === href}
              text={title}
              href={href}
              key={href}
            />
          ))}
        </div>
        <div className={styles.footerWrapper}>
          <Footer
            onNoteOpen={() => setNoteVisible(true)}
          />
        </div>
      </div>
    </div>
  );
}