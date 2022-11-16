import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div>
      <div style={{ padding: '1rem', borderBottom: '1px solid white' }}>
        <Link href="/">Home</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
