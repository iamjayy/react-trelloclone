const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: 1,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: 1,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: 2,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      }
    ]
  }
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
