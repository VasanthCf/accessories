import AppLayout from "./components/ui/AppLayout";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loaderCategory } from "./components/pages/Home";
import Error from "./components/ui/Error";
import Electronics, { loaderElectronic } from "./components/pages/Electronics";
import Jewellery, { loaderJewellery } from "./components/pages/Jewellery";
import MenClothing, { loaderMen } from "./components/pages/MenClothing";
import WomenClothing, { loaderWomen } from "./components/pages/WomenClothing";

import Buy from "./components/pages/Buy";
import { loaderProduct } from "./components/pages/Buy";
import Forms from "./components/pages/Forms";
import { formAction } from "./components/features/Form/FormBuy";
import Bills from "./components/pages/Bills";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loaderCategory,
      },
      {
        path: "/electronic",
        element: <Electronics />,
        loader: loaderElectronic,
      },
      {
        path: "/jewellery",
        element: <Jewellery />,
        loader: loaderJewellery,
      },
      {
        path: "/mens-clothing",
        element: <MenClothing />,
        loader: loaderMen,
      },
      {
        path: "/womens-clothing",
        element: <WomenClothing />,
        loader: loaderWomen,
      },
      {
        path: "/product/:id",
        element: <Buy />,
        loader: loaderProduct,
      },
      {
        path: "/buy/form",
        element: <Forms />,
        action: formAction,
      },
      {
        path: "/placed",
        element: <Bills />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
