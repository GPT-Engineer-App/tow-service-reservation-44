//index.jsx 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ServiceHistory from "./pages/ServiceHistory";
import ServiceDetails from "./pages/ServiceDetails";
import Payment from "./pages/Payment";
import Rating from "./pages/Rating";
import BookingConfirmation from "./pages/BookingConfirmation";
import ThankYouPage from "./pages/ThankYouPage";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service-history" element={<ServiceHistory />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/rating/:id" element={<Rating />} />
          <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
