import { CONSTANTS } from "../../actions/index";

let listID = 2;
let cardID = 6;

const initialState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: `card-${1}`,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      }
    ]
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: `card-${3}`,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: `card-${4}`,
        text: "lorum ipsom lorum ipsom lorum ipsom"
      },
      {
        id: `card-${5}`,
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
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `list-${cardID}`
      };
      cardID += 1;

      console.log("action received", action);

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
