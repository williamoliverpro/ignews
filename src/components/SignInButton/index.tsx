import { FaGithub } from 'react-icons/fa'
import { FiLogIn, FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useMediaQuery } from 'react-responsive'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return session ? (
        <button
            type="button"
            className={`${styles.signInButton} ${isTabletOrMobile && styles.signInButtonMobile}`}
            onClick={() => signOut()}
        >
            {isDesktopOrLaptop ? (
                <>
                    <FaGithub color="#04d361" />
                    {session.user.name}
                    <FiX color="#737380" className={styles.closeIcon} />
                </>
            ) : (
                <>
                    <FaGithub color="#04d361" />
                    Sign in
                </>
            )}
        </button>
    ) : (
        <button
            type="button"
            className={`${styles.signInButton} ${isTabletOrMobile && styles.signInButtonMobile}`}
            onClick={() => signIn('github')}
        >

            {isDesktopOrLaptop ? (
                <>
                    <FaGithub color="#eba417" />
                    {'Sign in with Github'}
                </>
            ) : (
                <>
                    < FaGithub color="#eba417" />
                    Sign in
                </>
            )}
        </button >
    )
}