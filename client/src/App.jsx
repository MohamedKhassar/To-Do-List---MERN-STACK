import Select from "./components/design-system/Select";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  )
}
