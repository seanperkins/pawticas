import MyNav from './MyNav'

export default function Layout({children}) {
  return (
    <div>
      <MyNav />
      <div className="container py-3">{children}</div>
    </div>
  )
}
