"use client";

import Main from "./components/Main";
import Couple from "./components/Couple";
import Nav from "./components/Nav";
import InviteInfo from "./components/HoldInfo";
import Messages from "./components/Messages";
import Gallery from "./components/Gallery";
import Audio from "./components/Audio";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import useScroll from "./hooks/useScroll";
const queryClient = new QueryClient();

export default function Home() {
  // const { scrollTop } = useScroll({
  //   id: "shop_scroll",
  //   top: false,
  //   active: true,
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="max-w-screen-2xl mx-auto relative">
        <Main />
        <Nav />
        <div className="px-2 md:px-20 lg:px-32">
          <Couple />
          <InviteInfo />
          <Messages />
          <Gallery />
          <Audio />
        </div>
      </div>
    </QueryClientProvider>
  );
}
