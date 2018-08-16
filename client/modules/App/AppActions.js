// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_TICKET = 'TOGGLE_ADD_TICKET';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}
export function toggleAddTicket() {
  return {
    type: TOGGLE_ADD_TICKET,
  };
}

