import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { FiLogIn, FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useMediaQuery } from 'react-responsive'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 900px)'
    })

    const router = useRouter()

    return session ? (
        <button
            type="button"
            className={`${styles.signInButton} ${!isDesktopOrLaptop && styles.signInButtonMobile}`}
            onClick={() => signOut()}
        >
            {isDesktopOrLaptop ? (
                <>
                    <FaGithub color="#04d361" />
                    {session.user.name}
                    <FiX color="#737380" className={styles.closeIcon} />
                </>
            ) : (
                'Logout'
            )}
        </button>
    ) : (
        <button
            type="button"
            className={`${styles.signInButton} ${!isDesktopOrLaptop && router.pathname !== '/' && styles.signInButtonMobile}`}
            onClick={() => signIn('github')}
        >

            {isDesktopOrLaptop || router.pathname === '/' ? (
                <>
                    <FaGithub color="#eba417" />
                    {'Sign in with Github'}
                </>
            ) : (
                'Login'
            )}
        </button >
    )
}