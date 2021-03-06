import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useMediaQuery } from 'react-responsive'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
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
                    Logout
                </>
            )}
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >

            {isDesktopOrLaptop ? (
                <>
                    <FaGithub color="#eba417" />
                    {'Sign in with Github'}
                </>
            ) : (
                <>
                    <FaGithub color="#eba417" />
                    Sign in
                </>
            )}
        </button >
    )
}