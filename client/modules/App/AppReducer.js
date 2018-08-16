// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_TICKET } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddTicket: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_ADD_TICKET:
      return {
        showAddTicket: !state.showAddTicket,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowAddTicket = state => state.app.showAddTicket;

// Export Reducer
export default AppReducer;
