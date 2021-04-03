export default (posts = [], action) => {
  // state(posts) em reducer tem que ter sempre um valor default por isso array vazio
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

// nao usamos aqui, exportamos para reducers/index
