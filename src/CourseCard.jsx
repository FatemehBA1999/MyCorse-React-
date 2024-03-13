function CourseCard({ course, index }) {
  // insted above text ====>>>>  (props){
  // const {course} = props
  // }
  // پراپسها کلا ابجکت هستند
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imgUrl} alt={index} />
      </div>
      <div className="course-item__detail">
        <div className="course-item__detail-info">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <button className="btn">{course.tags[0]}</button>
          <p>
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
              {/* {course.start} */}
            </span>
          </p>
        </div>
        <div className="course-item__detail-status">
          <p>
            <span>⭐</span>
            {course.rate}
          </p>
          <button
            className={`btn ${
              course.status === "Active"
                ? "btn__primary"
                : course.status === "UnCompleted"
                ? "btn__dengare"
                : "btn"
            }`}
          >
            {course.status}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
