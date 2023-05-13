import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../userProvider/UserProvider";
export default function TeacherNavbar(props) {
const user = useUser();
  return (
    // <>
    //   <header className="teacher-header">
    //   <nav className="navbar navbar-expand-lg bg-body-tertiary teacher-navbar">
    //     <div className="container-xxl ">
    //       <div className="row">
    //         <div className="col-md-4">
    //           <Link to="/" className="navbar-brand ">
    //             Step
    //           </Link>
    //         </div>
    //         <div
    //           className="collapse navbar-collapse col-md-4"
    //           id="navbarSupportedContent"
    //         >
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li className="nav-item">
    //               <Link
    //                 className="nav-link active"
    //                 aria-current="page"
    //                 href="#"
    //               >
    //                 Home
    //               </Link>
    //             </li>
    //             <li className="nav-item ">
    //               <Link
    //                 className="nav-link active"
    //                 to={`/teacher/show-student-list/` + props.monitoredClassId}
    //               >
    //                 Student
    //               </Link>

    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link active" href="#">
    //                 Grade
    //               </Link>

    //             </li>
    //             <li className="nav-item dropdown">
    //               <a
    //                 className="nav-link dropdown-toggle"
    //                 href="#"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 More
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li>
    //                   <Link
    //                     to="/teacher/announcement"
    //                     className="dropdown-item"
    //                     href="#"
    //                   >
    //                     Notification
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link
    //                     to="/teacher/event"
    //                     className="dropdown-item"
    //                     href="#"
    //                   >
    //                     Upcoming event
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </div>
    //         </div>
    //     </div>
    //     </nav>
    //   </header>
    // </>

    <>
      <main className="flex-shrink-0">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="/teacher/home">
              Steps
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/teacher/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={
                      `/teacher/show-student-list/` + props.monitoredClassId
                    }
                  >
                    Student
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Grade
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownBlog"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <li>
                      <a className="dropdown-item" href="/teacher/announcement">
                        Notification
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/teacher/event">
                        Upcoming event
                      </a>
                    </li>
                  </ul>
                </li>
                {/* teacher name + photo */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownBlog"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.user.fullName}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/teacher/personal-information"
                      >
                        Personal Information
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/logout">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}
