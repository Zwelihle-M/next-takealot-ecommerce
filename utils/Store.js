import { createContext, useReducer } from "react";
import Cookies from "js-cookie";


export const Store = createContext();

const initialState = {

    // saving state of cart in Cookies
  cart: Cookies.get("cart")? JSON.parse(Cookies.get("cart")):
  { cartItems: [] , shippingAddress: {}},
};

function reducer(state, action) {
  switch (action.type) {
    // add new cart items
    case "Add_Cart_Item": {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item.name === existingItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
        Cookies.set("cart", JSON.stringify({...state.cart, cartItems}))

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    // remove existing cart items
    case "Remove_Cart_Item": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
       Cookies.set("cart", JSON.stringify({...state.cart, cartItems}))
      return {...state, cart: {...state.cart, cartItems } };
    }

    case "Reset_Cart": 
    return {
        ...state,
        cart:{
            cartItems: [],
            shippingAddress: { location: {}},
            paymentMethod:"",
        }
    }

    case 'Clear_Cart_Items':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    
    case 'Save_Delivery_Address':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

      case 'Save_Payment_Method':
        return {
          ...state,
          cart: {
            ...state.cart,
            paymentMethod: action.payload,
          },
        };



    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
