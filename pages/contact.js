import {useRouter} from 'next/router'
import Layout from '../components/Layout'

export default function Contact() {
  const router = useRouter()

  const {query} = router

  return (
    <Layout>
      <h1 className="text-center pt-5 pb-3">Contact</h1>
      <pre>{JSON.stringify(query, undefined, 2)}</pre>
    </Layout>
  )
}
