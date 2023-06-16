import { Modal } from "antd";

function info(params:any & {callback:(o:any)=>void}){
  Modal.info({
    title:"父弹出",
    width:800,
    content:  JSON.stringify(params),
    onOk:() => {
      if(params.callback){
        params.callback("父给你的回调")
      }
    }
  })
}

export default {
  info
}
