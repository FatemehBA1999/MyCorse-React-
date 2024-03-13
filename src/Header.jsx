
const courseStatus = ["All", "Active", "Completed", "Upcomming"];
function Header() {
  return (
    <div className="container">
      <h1 className="title">My Courses</h1>
      <div className="navbar">
        <ul className="navbar-list">
          {courseStatus.map((c) => (
            <li key={c} className="navbar-list__item">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
