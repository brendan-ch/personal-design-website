'use client'

import Exit from "@/icons/Exit"
import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from './ExitButton.module.css'
import { useCallback } from "react"

interface Props {
  /**
   * Control whether to call `router.back()` on exit, or to navigate
   * to the home page.
   */
  goBackOnExit?: boolean,
}

/**
 * Exit button which either navigates to the home page,
 * or calls `router.back()`, depending on the prop passed.
 * @param param0
 * @returns
 */
export default function ExitButton({ goBackOnExit }: Props) {
  const router = useRouter()

  const onExit = useCallback(() => {
    router.back()
  }, [router])

  return goBackOnExit ? (
    <button className={styles.exitButton} onClick={onExit}>
      <Exit className={styles.exitButtonIcon} />
      <Exit width={24} height={24} className={styles.exitButtonIconMobile} />
    </button>
  ) : (
    <Link className={styles.exitButton} href="/">
      <Exit className={styles.exitButtonIcon} />
      <Exit width={24} height={24} className={styles.exitButtonIconMobile} />
    </Link>
  )

}