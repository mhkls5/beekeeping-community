import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>養蜂コミュニティへようこそ</h1>
        <p>日本全国の養蜂家をつなぐプラットフォーム</p>

        <div style={{ marginTop: '2rem' }}>
          <h2>当サイトの機能</h2>
          <ul>
            <li>養蜂家の登録と検索</li>
            <li>はちみつ商品の販売</li>
            <li>天気情報との連携（準備中）</li>
            <li>養蜂記録の管理</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}