// frontend/components/Layout.js

import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>養蜂コミュニティ</title>
        <meta name="description" content="日本の養蜂家をつなぐプラットフォーム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
          <Link href="/" legacyBehavior>
            <a style={{ marginRight: '1rem' }}>ホーム</a>
          </Link>
          <Link href="/beekeepers" legacyBehavior>
            <a style={{ marginRight: '1rem' }}>養蜂家を探す</a>
          </Link>
          <Link href="/api-info" legacyBehavior>
            <a style={{ marginRight: '1rem' }}>API情報</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ padding: '1rem', marginTop: '2rem', backgroundColor: '#f5f5f5' }}>
        <p>© 2026 养蜂コミュニティ - 日本全国の養蜂家をつなぐプラットフォーム</p>
      </footer>
    </div>
  );
}