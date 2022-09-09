export interface Category {
  data: {
    type: String;
    id: String;
    isFeature: Boolean;
    field: String;
    name: String;
    path: String;
    thumbnail: {
      id: String;
      url: String;
    };
  }[];
}
