export const reducer = (state, action) => {
	if (action.type === 'LOADING') {
		return { ...state, Loading: true };
	}
	if (action.type === 'FETCH') {
		return {
			...state,
			list: action.payload,
		};
	}
	// if (action.type === "REMOVE") {
	//  return{
	//   ...state,

	//  }

	// }
};
