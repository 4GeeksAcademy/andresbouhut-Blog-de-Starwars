import { useStore } from "../store";

export default function useGlobalReducer() {
  return useStore();
}