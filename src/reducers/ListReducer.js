import { CONSTANTS } from "../actions";

const initialState = [
  {
    id: 0,
    title: "In Progress",
    cards: []
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        id: state.length + 1,
        title: action.payload.text,
        cards: []
      };

      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [
              ...list.cards,
              {
                id: list.cards.length + 1,
                text: action.payload.text
              }
            ]
          };
        }

        return list;
      });
    case CONSTANTS.DRAG_HAPPENED:
      const newState = [...state];

      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
        // draggableId
      } = action.payload;

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);

        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = newState.find(
          list => droppableIdStart === list.id.toString()
        );
        const card = list.cards.splice(droppableIndexStart, 1);

        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = newState.find(
          list => droppableIdStart === list.id.toString()
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = newState.find(
          list => droppableIdEnd === list.id.toString()
        );
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};

export default listsReducer;
