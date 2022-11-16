import Image from 'next/image';
import styles from './page.module.css';

import { pageContext } from '../context';
import { useContext } from 'react';
import Link from 'next/link';

export default function Home() {
  const c = useContext(pageContext);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Context {c}</h1>
        <Link href="/route">Have a look at client component</Link>
      </main>
    </div>
  );
}
