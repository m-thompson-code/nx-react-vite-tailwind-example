import { Shared } from "@example/shared";

export function App() {
  return (
    <div className="bg-rose-100">
      <h1>Hello Second App</h1>
      <Shared />
      <h3>{import.meta.env.VITE_SOME_KEY}</h3>
      <h4>{import.meta.env.DB_PASSWORD ?? 'DB_PASSWORD is not available on client'}</h4>
    </div>
  );
}

export default App;


