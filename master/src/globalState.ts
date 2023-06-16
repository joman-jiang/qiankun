import { useModel } from "@umijs/max";
import { useState } from "react";
import MyModal from "./components/MyModal";

export default function useGlobalState(data:any) {
  const { initialState } = useModel('@@initialState');
  const [globalState, setGlobalState] = useState<any>({
    initialState,
    modalInfo:MyModal.info, // 函数传递
    ...data,
  });
  return {
    globalState, setGlobalState
  };
}
