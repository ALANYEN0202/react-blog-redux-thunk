import useTodos from "./useTodos";
import "bootstrap/dist/css/bootstrap.css";

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick} style={{ margin: "5px" }}>
      {children}
    </button>
  );
}

export default function Todos() {
  const {
    todos,
    value,
    handleChange,
    handleButtonClick,
    filter,
    handleFilterAll,
    handleFilterDone,
    handleFilterNotDone,
    handleClearAll,
    filterState,
  } = useTodos();

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleChange}
        style={{
          width: "50%",
        }}
      />
      <Button className="btn btn-primary" onClick={handleButtonClick}>
        Add todo
      </Button>
      <Button className="btn btn-info" onClick={handleFilterAll}>
        All
      </Button>
      <Button className="btn btn-success" onClick={handleFilterDone}>
        Done
      </Button>
      <Button className="btn btn-warning" onClick={handleFilterNotDone}>
        Not Done
      </Button>
      <Button className="btn btn-danger" onClick={handleClearAll}>
        Clear All
      </Button>
      {filterState(filter, todos)}
    </div>
  );
}
