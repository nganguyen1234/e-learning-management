import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Timetable() {
  const [classList, setClassList] = useState([]);
  useEffect(() => {
    getClassList();
  }, []);
  //Lấy ds class từ db lưu vào state
  const getClassList = async () => {
    await axios
      .get("http://localhost:8080/class/get-all-class")
      .then((res) => setClassList(res.data));
  };
    //hiển thị ds class ra cacs button để hiển thị timetable
    const renderClassList = classList.map((clazz, index) => {
        return(
            <Link to={`/guest/timetable/show-timetable-by-class/${clazz.id}`} className="btn btn-primary">{clazz.name}</Link>
        )
    })

  return <div>
    {renderClassList}
  </div>;
}
