import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with most popular teachers",
    imgUrl: "/public/images/2.png",
    rate: "3.5",
    tags: ["languages"],
    start: "2024-03-10T20:50:00.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description: "language lessons with most popular teachers",
    imgUrl: "/public/images/img1.jpg",
    rate: "0.85",
    tags: ["languages"],
    start: "2024-03-10T20:50:00.615Z",
    status: "UnCompleted",
  },
  {
    id: 3,
    title: "Programmer React",
    description: "language lessons with most popular teachers",
    imgUrl: "/public/images/img3.jpg",
    rate: "5.2",
    tags: ["languages"],
    start: "2024-03-10T20:50:00.615Z",
    status: "Active",
  },
];

function CourseList() {
  return (
    <div className="container">
      <div className="course-list">
      {courses.map((course, index) => {
        return <CourseCard key={course.id} course={course} index={index} />;
      })}
    </div>
    </div>
  );
}
export default CourseList;
