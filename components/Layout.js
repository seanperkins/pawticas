import MyNav from './MyNav'

export default function Layout({children, className}) {
  return (
    <div>
      <MyNav />
      <div className={className}>{children}</div>
    </div>
  )
}
