import { Suspense, lazy } from "react";
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
