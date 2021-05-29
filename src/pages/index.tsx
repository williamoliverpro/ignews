import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'
interface HomeProps {
  product: {
    priceId: string
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  console.log("isTabletOrMobile", isTabletOrMobile)
  console.log("isTabletOrMobile", isDesktopOrLaptop)

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={`${styles.contentContainer} ${isTabletOrMobile && styles.contentContainerMobile}`}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        {isDesktopOrLaptop && <img src="/images/avatar.svg" alt="Girl coding" />}
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IZAcdCvUR2D866dymyzwsd4')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  const ONE_HOUR = 60 * 60 * 24

  return {
    props: {
      product
    },
    revalidate: ONE_HOUR
  }
}