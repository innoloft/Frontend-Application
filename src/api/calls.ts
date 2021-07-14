import axios from "axios";
import { useQuery } from "react-query";

export function useProduct() {
  return useQuery<any, string>("product", () =>
    axios.get("https://api-test.innoloft.com/product/6781/").then((res) => res)
  );
}

export function useUpdateProduct() {
  return useQuery<any, string>("updateProduct", () =>
    axios.put("https://api-test.innoloft.com/product/6781/").then((res) => res)
  );
}

export function useTrlList() {
  return useQuery<any, string>("trlList", () =>
    axios.put("https://api-test.innoloft.com/trl/").then((res) => res)
  );
}
