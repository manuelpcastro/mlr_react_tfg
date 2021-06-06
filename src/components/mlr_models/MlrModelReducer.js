import { GET_MLR_MODEL, ADD_MLR_MODEL, DELETE_MLR_MODEL, UPDATE_MLR_MODEL } from "./MlrModelTypes";

const initialState = {
  mlr_models: []
};

export const mlrModelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MLR_MODEL:
      return {
        ...state,
        mlr_models: action.payload
      };
    case ADD_MLR_MODEL:
      return {
        ...state,
        mlr_models: [...state.mlr_models, action.payload]
      };
    case DELETE_MLR_MODEL:
      return {
        ...state,
        mlr_models: state.mlr_models.filter((item, index) => item.id !== action.payload)
      };
    case UPDATE_MLR_MODEL:
      const updatedMlrModels = state.mlr_models.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        mlr_models: updatedMlrModels
      };
    default:
      return state;
  }
};
