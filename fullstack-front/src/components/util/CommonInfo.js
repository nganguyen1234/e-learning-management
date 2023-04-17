import axios from "axios";
import React, { useEffect } from "react";
export default function CommonInfo() {
  const [ethnicity, setEthnicity] = useState([]);
  const [placeOfOrigin, setPlaceOfOrigin] = useState([]);
  const [faculty, setFaculty] = useState([]);
  useEffect(() => {
    getInfoList(
      ethnicity,
      "http://localhost:8080/common-info/get-all-ethnicity",
      setEthnicity()
    );
    getInfoList(
      placeOfOrigin,
      "http://localhost:8080/common-info/get-all-city",
      setPlaceOfOrigin()
    );
    getInfoList(
      faculty,
      "http://localhost:8080/common-info/get-all-faculty",
      setFaculty()
    );
  },[]);

  function getInfoList(name, url, setInfo) {
    axios.get(url).then((res) => {
      setInfo(res.data);
    });
  }
  return { ethnicity, placeOfOrigin, faculty };
}
