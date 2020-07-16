import { CONSTANTS } from "../../actions/index";

let listID = 2;
let cardID = 4;

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
      },
      {
        id: 3,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      }
    ]
  }
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};

export default ListReducer;
