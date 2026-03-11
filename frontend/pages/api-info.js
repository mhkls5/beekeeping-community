// frontend/pages/api-info.js

import Layout from '../components/Layout';

export default function ApiInfoPage() {
  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>API情報</h1>
        <p>このサイトではStrapi CMSを使用しており、以下のAPIエンドポイントが利用可能です：</p>

        <h2>養蜂家データ</h2>
        <pre>GET /api/beekeepers</pre>
        <p>すべての養蜂家情報を取得します。</p>

        <h2>地域別養蜂家</h2>
        <pre>GET /api/beekeepers?prefecture=東京都</pre>
        <p>指定した地域の養蜂家情報を取得します。</p>

        <h2>はちみつ商品</h2>
        <pre>GET /api/honey-products</pre>
        <p>販売中のはちみつ商品情報を取得します。</p>
      </div>
    </Layout>
  );
}