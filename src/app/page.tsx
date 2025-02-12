'use client';

import styles from './page.module.css';
import Header from '@/app/components/Header/Header';

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h2>Welcome to Yasashii</h2>
        <p>A minimalistic application with a clean interface.</p>
      </main>
    </div>
  );
}
