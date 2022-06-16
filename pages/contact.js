import Head from 'next/head'
import {useRouter} from 'next/router'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

export default function Contact() {
  const router = useRouter()

  const {
    query,
    query: {subject},
  } = router

  return (
    <Layout className="container py-5">
      <Head>
        <title>Contact us | Petcare in Richmond, Viriginia | Pawticas</title>
        <meta
          name="description"
          content="We would love to hear from you. We are here to help you with your pet's needs."
        />
      </Head>
      <h1 className="text-center mb-5">Contact</h1>
      <ContactForm subject={subject} />
    </Layout>
  )
}
