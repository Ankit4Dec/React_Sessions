import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <div className="App">
        <ThemeProvider>
          <PageRoutes />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
