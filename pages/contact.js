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
      <h1 className="text-center mb-5">Contact</h1>
      <ContactForm subject={subject} />
    </Layout>
  )
}
