import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Iaido from "./pages/Iaido.tsx";
import DojoPage from "./pages/DojoPage.tsx";
import Merch from "./pages/Merch.tsx";
import ContattiPage from "./pages/ContattiPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/kendo" replace />} />
          <Route path="/kendo" element={<Index />} />
          <Route path="/iaido" element={<Iaido />} />
          <Route path="/dojo" element={<DojoPage />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contatti" element={<ContattiPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
