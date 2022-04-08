import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export default function tokenCreator(values, PatientRefKey) {
  if (PatientRefKey !== "") {
    const req = new XMLHttpRequest();
    req.open("POST", 'http://localhost:8000/ReferenceKey', true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = req.response;
          console.log(data);
          Cookies.set("patient", data);

        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(`reference=${values}`);
  }else {
    Cookies.set("patient", values);

  }
  const secret = process.env.NEXT_PUBLIC_SECRET_KEY;
  const token = jwt.sign(
    {
      values,
    },
    secret
  );

  Cookies.set("accesToken", token);
}
