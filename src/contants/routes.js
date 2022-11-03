import { HomePage, NFTPage } from "../pages";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/nft/:id",
    component: <NFTPage />
  }
];

export default routes
