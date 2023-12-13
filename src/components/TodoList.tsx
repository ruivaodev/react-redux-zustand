import { useSelector } from "react-redux";

export function TodoList() {
  const store = useSelector((state) => state);
  return (
    <ul>
      <li>Fazer café</li>
      <li>Estudar Redux</li>
      <li>Estudar Zustand</li>
    </ul>
  );
}
