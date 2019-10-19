export const initialState = [{
   item: 'Learn about reducers',
   completed: false,
   id: 3892987589
}];

export function reducer (state, action) {
   switch (action.type) {
      case "ADD_TASK":
         return [
            ...state,
            action.payload
         ];
      case "TOGGLE_COMPLETED":
         //clone state
         const currentState = [...state];

         //find item to complete and update it
         const toggleItem = currentState.find(todo => todo.id === action.payload);
         toggleItem.completed = !toggleItem.completed;

         return currentState;
      default:
         return state;
   }
};