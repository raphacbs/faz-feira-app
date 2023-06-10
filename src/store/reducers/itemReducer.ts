import useConstants from "../../hooks/useConstants";
import { InitialState } from "../../types/Item";

export const initialState: InitialState = {
  itemToSave: {
    note: "",
    quantity: 0,
    price: 0,
    perUnit: 0,
    added: false,
    product: {
      code: "",
    },
    shoppingList: {
      id: "",
    },
    unit: {
      id: "",
    },
  },
  selectedItem: {
    id: "",
    note: "",
    quantity: 0,
    price: 0,
    perUnit: 0,
    product: {
      brand: "",
      code: "",
      createdAt: "",
      description: "",
      updateAt: "",
      priceHistories: [],
      thumbnail: "",
      unit: "",
    },
    shoppingList: {
      id: "",
      description: "",
      supermarketId: "",
      supermarketName: "",
      createdAt: "",
      updatedAt: "",
      status: "",
      itemsInfo: {
        quantityPlannedProduct: 0,
        quantityAddedProduct: 0,
        plannedTotalValue: 0,
        totalValueAdded: 0,
      },
    },
    unit: {
      description: "",
      id: "",
      initials: "",
      integerType: true,
    },
    createdAt: "",
    updatedAt: "",
    added: false,
  },
  items: [],
};

const { SET_ITEM_TO_SAVE, SET_ITEMS, SET_SELECTED_ITEM, CHANGE_ITEM_IN_ITEMS } =
  useConstants();

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SET_ITEM_TO_SAVE:
      return { ...state, itemToSave: action.payload };
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case CHANGE_ITEM_IN_ITEMS:
      const items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload };
        }
        return item;
      });
      return { ...state, items: items };
    default:
      return state;
  }
};

export default reducer;
