import { getDashboardData, getNewsData, getCollaborationData, getRecommendationData } from "./mockData";

export const getDashboardSummary = (type = "raw_materials") =>
  Promise.resolve(getDashboardData(type));

export const getNews = (limit = 30, type = "raw_materials") =>
  Promise.resolve(getNewsData(type, limit));

export const getCommentary = () => Promise.resolve({ commentaries: [] });

export const getCollaborations = () => Promise.resolve(getCollaborationData());

export const getLatestCollaboration = () => {
  const data = getCollaborationData();
  return Promise.resolve({ thread: data.threads[0] || null });
};

export const getRecommendations = () => Promise.resolve(getRecommendationData());

export const getRisks = () => Promise.resolve({ risks: [] });

export const getEventHistory = (limit = 100) => Promise.resolve({ events: [] });

export const getHealth = () => Promise.resolve({ status: "ok" });

export const getBuyerActions = () => Promise.resolve({ actions: [] });

export const createBuyerAction = (action) =>
  Promise.resolve({ action: { ...action, created_at: new Date().toISOString(), created_by: "demo_user" } });

export const getMaterialDetail = (materialId) => Promise.resolve(null);
