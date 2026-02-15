import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import {
  ProjectsDonePage,
  CurrentProjectPage,
  FutureProjectPage,
  ContactPage,
} from "@/pages/OtherPages";
import { ThemeProvider } from "@/components/refine-ui/theme/theme-provider";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Refine
          routerProvider={routerProvider}
          resources={[
            {
              name: "home",
              list: "/",
            },
            {
              name: "about",
              list: "/about",
            },
            {
              name: "services",
              list: "/services",
            },
            {
              name: "projects-done",
              list: "/projects-done",
            },
            {
              name: "current-project",
              list: "/current-project",
            },
            {
              name: "future-project",
              list: "/future-project",
            },
            {
              name: "contact",
              list: "/contact",
            },
          ]}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects-done" element={<ProjectsDonePage />} />
              <Route path="/current-project" element={<CurrentProjectPage />} />
              <Route path="/future-project" element={<FutureProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Refine>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
