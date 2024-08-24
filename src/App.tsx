import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/error-boundary";

// 使用 lazy 进行组件的懒加载
const Home = lazy(() => import("@/pages/Home"));
const Work = lazy(() => import("@/pages/work"));
const Editor = lazy(() => import("@/pages/editor/index"));
const Template = lazy(() => import("@/pages/Template"));
const Login = lazy(() => import("@/pages/login/index"));
const TestError = lazy(() => import("@/components/test-error"));

function App() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled rejection caught:", event.reason);
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    const handleGlobalError = (
      message: string | Event,
      source?: string,
      lineno?: number,
      colno?: number,
      error?: Error
    ) => {
      console.error("Global error caught:", { message, source, lineno, colno, error });
    };

    window.onerror = handleGlobalError;

    return () => {
      window.onerror = null;
    };
  }, []);

  useEffect(() => {
    const handleResourceError = (event: Event) => {
      console.error("Resource loading error:", event);
    };

    window.addEventListener("error", handleResourceError, true);

    return () => {
      window.removeEventListener("error", handleResourceError, true);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:id" element={<Work />} />
            <Route path="/editor/:id" element={<Editor />} />
            <Route path="/template" element={<Template />} />
            <Route path="/error" element={<TestError />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
