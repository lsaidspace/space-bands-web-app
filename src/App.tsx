import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import BranchDetailPage from './pages/BranchDetail';
import BranchesPage from './pages/Branches';

function Layout() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BranchesPage />} />
          <Route path="/branches/:branchId" element={<BranchDetailPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}