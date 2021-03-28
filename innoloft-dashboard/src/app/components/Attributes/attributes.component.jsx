import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrl, trlSelector } from "./attributes.slice";

function Attributes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrl())
  }, [dispatch])

  const { loading, hasErrors, trl } = useSelector(trlSelector);
  console.log(loading, hasErrors, trl)
  return loading && <p>Hello</p>;
}

export default Attributes;
