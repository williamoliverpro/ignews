import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 900px)'
    })
    const router = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {isDesktopOrLaptop &&
                    <img src="/images/logo.svg" alt="ig.news" />}
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                {(isDesktopOrLaptop || !isDesktopOrLaptop && router.pathname !== '/') && <SignInButton />}
            </div>
        </header>
    )
}