import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import Cookies from "js-cookie";

function errorsReq(errorData) {
  toast.error(errorData);
}
export default function requestCreator(
  method,
  url,
  values,
  redirectedUrl,
  routes,
  key
  
) {
  const req = new XMLHttpRequest();
  req.open(method, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let data = req.response;
        console.log(data);
        
        if (data == "success") {
          Cookies.set('success',uuidv4())
          routes.push(redirectedUrl);
        } else {
          if(key){

          }else {

            errorsReq(data);
          }
        }
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(values);
}
