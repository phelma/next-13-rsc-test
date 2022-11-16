export default function Layout({ children }) {
  return (
    <div>
      <div style={{padding: '1rem', borderBottom: '1px solid white'}}>NAVBAR</div>
      <div>{children}</div>
    </div>
  )
}