import fetchPhones from "../../helper/fetch_phones";
const SHOW_PHONES = "phones/SHOW_PHONES";

const getPhones = async (dispatch) => {
  const phones = await fetchPhones();
  dispatch({type: SHOW_PHONES, payload: phones})
}

const initialState = [];
export default function reducer (state = initialState, action = {}) {
  switch(action.type) {
    case SHOW_PHONES:
      return action.payload;
    default:
      return state;  
  }
}

export { getPhones }