
type ApiCollectionResponse<T> = {
  data: Record<string, T>[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
};

export default ApiCollectionResponse;
