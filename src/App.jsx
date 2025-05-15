import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const WebApp = () => {
  const router = createRouter({ routeTree });
  return <RouterProvider router={router} />;
};

// kita membuat sebuah element React: div yang berisi teks hello World!

const container = document.getElementById("root");
// instance dari div id=root

const root = createRoot(container);
// membuat akar/rootnya; menghapus existing children yg ada pada container

root.render(<WebApp />);
// render component/react elementnya
