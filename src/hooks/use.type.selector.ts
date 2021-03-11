import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducer/root.reducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
