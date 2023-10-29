import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export const useDispatcher = useDispatch<ThunkDispatch<any, any, any>>()