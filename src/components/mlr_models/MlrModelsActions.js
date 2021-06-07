import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_MLR_MODEL, ADD_MLR_MODEL, DELETE_MLR_MODEL, UPDATE_MLR_MODEL } from "./MlrModelTypes";
import {API_MLRMODEL_URL} from "../../constants";

export const getMlrModels = () => dispatch => {
  axios
    .get(API_MLRMODEL_URL)
    .then(response => {
      dispatch({
        type: GET_MLR_MODEL,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addMlrModel = mlr_model => dispatch => {
  axios
    .post(API_MLRMODEL_URL, mlr_model)
    .then(response => {
      dispatch({
        type: ADD_MLR_MODEL,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const removeMlrModel = id => dispatch => {
  axios
    .delete(API_MLRMODEL_URL + id +'/')
    .then(response => {
      dispatch({
        type: DELETE_MLR_MODEL,
        payload: id
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const updateMlrModel = (id, mlr_model) => dispatch => {
  axios
    .patch(API_MLRMODEL_URL + id+'/', mlr_model)
    .then(response => {
      dispatch({
        type: UPDATE_MLR_MODEL,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};