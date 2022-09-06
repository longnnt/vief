export type Category = {
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
};

// export type Category={

//     users:{
//       id: String,
//       fisrtname: String,
//       lastname: String,
//       age: String,
//       email: String,
//       username: String,
//       image: URL,
//     }[]
// }
