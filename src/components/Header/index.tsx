import { useMediaQuery } from 'react-responsive'

import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    console.log("isTabletOrMobile", isTabletOrMobile)
    console.log("isDesktopOrLaptop", isDesktopOrLaptop)

    return (
        <header className={styles.headerContainer}>
            <div className={`${styles.headerContent} ${isTabletOrMobile ? styles.headerContentMobile : ""}`}>
                {isDesktopOrLaptop &&
                    <img src="/images/logo.svg" alt="ig.news" />
                }
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}