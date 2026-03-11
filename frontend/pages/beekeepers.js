// frontend/pages/beekeepers.js

import Layout from '../components/Layout';

export default function BeekeepersPage() {
  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>養蜂家一覧</h1>
        <p>全国の養蜂家さんを検索・閲覧できます。</p>

        <div style={{ margin: '1rem 0' }}>
          <input
            type="text"
            placeholder="地域名で検索..."
            style={{ padding: '0.5rem', width: '300px' }}
          />
          <button style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}>
            検索
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>養蜂家の皆様の声</h2>
          <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0' }}>
            <p><strong>山田養蜂園様:</strong> このプラットフォームのおかげで、他の養蜂家の方々と情報交換できるようになりました！</p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0' }}>
            <p><strong>佐藤養蜂場様:</strong> 地域のはちみつを直接販売できる仕組みがとても便利です。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}