import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
export default function DetailTimetable() {
  const query = useParams();
  const [timetable, setTimetable] = useState({ periods: []});

  useEffect(() => {
    getTimetable();
  }, []);

  const getTimetable = async () => {
    await axios
      .get("http://localhost:8080/timetable/get-timetable-by-class/", {
        params: { classId: query.classId },
      })
      .then((res) => setTimetable(res.data))
      .then(console.log(timetable));
  };


  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Monday</th>
            {timetable.periods.map((item)=>{
      if(item.day=="Monday"){
        return <td>{item.subject.name}</td>
      }
    })
      }
          </tr>
          <tr>
            <th scope="row">Tuesday</th>
            {timetable.periods.map((item)=>{
      if(item.day=="Tuesday"){
        return <td>{item.subject.name}</td>
      }
    })
      }
          </tr>
          <tr>
            <th scope="row">Wednesday</th>
            {timetable.periods.map((item)=>{
      if(item.day=="Wednesday"){
        return <td>{item.subject.name}</td>
      }
    })
      }
          </tr>
          <tr>
            <th scope="row">Thursday</th>
            {timetable.periods.map((item)=>{
      if(item.day=="Thursday"){
        return <td>{item.subject.name}</td>
      }
    })
      }
          </tr>
          <tr>
            <th scope="row">Friday</th>
            {timetable.periods.map((item)=>{
      if(item.day=="Friday"){
        return <td>{item.subject.name}</td>
      }
    })
      }
          </tr>
        </tbody>
      </table>
    </div>
  );
}
