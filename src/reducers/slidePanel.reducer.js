// import * as animalActions from "../actions/animalList.actions";

const initialState = {
  slidePanelOpen: false
}

export const slidePanel = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SLIDE_PANEL":
      return {
        ...state,
        slidePanelOpen: action.payload
      }

    default:
      return state;
  }
}