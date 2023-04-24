const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];
const objs = [
  { name: "mine" },
  { name: "mine" },
  { name: "design" },
  { name: "sales" },
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => {
          const filtered = objs.filter((o) => o.name === f);
          return (
            <button
              key={f}
              onClick={() => handleClick(f)}
              className={currentFilter === f ? "active" : ""}
            >
              {f}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
