// frontend/utils/api.js

// APIのベースURLを環境変数から取得
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

// 全ての養蜂家情報を取得
export const fetchBeekeepers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/beekeepers`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching beekeepers:', error);
    throw error;
  }
};

// 特定の養蜂家情報を取得
export const fetchBeekeeperById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/beekeepers/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching beekeeper:', error);
    throw error;
  }
};

// 新しい養蜂家を登録
export const createBeekeeper = async (beekeeperData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/beekeepers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: beekeeperData }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error creating beekeeper:', error);
    throw error;
  }
};

// 巣箱記録を取得
export const fetchHiveRecords = async (beekeeperId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/hive-records?populate=beekeeper&filters[beekeeper][id][$eq]=${beekeeperId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching hive records:', error);
    throw error;
  }
};

// はちみつ商品を取得
export const fetchHoneyProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/honey-products?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching honey products:', error);
    throw error;
  }
};