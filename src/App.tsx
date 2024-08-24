import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Work from "@/pages/work";
import Editor from "@/pages/editor/index";
import Template from "@/pages/Template";
import Login from "@/pages/login/index";
import ErrorBoundary from "@/components/error-boundary";
import TestError from "@/components/test-error";

function App() {
  useEffect(() => {
    // 使用 unhandledrejection 监听器捕获未处理的 Promise 错误
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled rejection caught:", event.reason);
      // 这里你可以执行额外的操作，如显示错误消息或报告错误
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

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<Work />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/template" element={<Template />} />
          <Route path="/error" element={<TestError />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
