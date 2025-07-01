import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vadalia-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <AppRouter />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
