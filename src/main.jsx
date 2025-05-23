import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback.jsx";
import { register } from "swiper/element/bundle";
register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={<ErrorFallback />}
    onReset={() => window.location.replace("/")}
  >
    <App />
  </ErrorBoundary>,
);
