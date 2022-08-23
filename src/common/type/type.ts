// export type Category={
//   id: String,
//   type: String,
//   thumbnail: {
//     id: String,
//     url: String,
//   },
//   name: String,
//   field: String,
//   isFeature: Boolean,

// }

export type Category = {
  id: String;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: -37.3159;
      lng: 81.1496;
    };
  };
  phone: String;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String;
  };
}[];
