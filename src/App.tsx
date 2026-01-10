import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Magazin from "./pages/Magazin";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import ScrollToSection from '@/components/ScrollToSection_temp';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Header />
        <ScrollToSection /> 
        <main className="pt-2">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/magazin" element={<Magazin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
