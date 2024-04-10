import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import BookingConfirmation from "./pages/BookingConfirmation";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Rating from "./pages/Rating";
import ServiceDetails from "./pages/ServiceDetails";
import ServiceHistory from "./pages/ServiceHistory";
import Signup from "./pages/Signup";
import ThankYouPage from "./pages/ThankYouPage";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  }
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service-history" element={<ServiceHistory />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/rating/:id" element={<Rating />} />
          <Route
            path="/booking-confirmation/:id"
            element={<BookingConfirmation />}
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);