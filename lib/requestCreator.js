import toast from "react-hot-toast";

function successReq() {
  toast.success("success");
}
function errorsReq(errorData) {
  toast.error(errorData);
}

export default function requestCreator(
  method,
  url,
  values,
  redirectedUrl,
  routes
) {
  const req = new XMLHttpRequest();
  req.open(method, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let data = req.response;
        console.log(data);

        if (data == "success") {
          successReq();
          routes.push(redirectedUrl);
        } else {
          errorsReq(data);
        }
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(values);
}
