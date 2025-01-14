import { useState } from "react";
import "./App.css";
import { AddPasswordPage } from "./pages/AddPasswordPage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  const [currentPage, setCurrentPage] = useState("landingpage");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage.toLowerCase());
  };

  return (
    <div className="App">
      <div className="h-auto w-80 mx-auto bg-backdrop">
        {(() => {
          switch (currentPage) {
            case "landingpage":
              return <LandingPage handlePageChange={handlePageChange} />;
              
            case "signin":
              return <RegisterPage handlePageChange={handlePageChange} />;
            case "homepage":
              return <HomePage handlePageChange={handlePageChange} />;
            case "addpasswordpage":
              return <AddPasswordPage handlePageChange={handlePageChange} />;
            case "profilepage":
              return <ProfilePage userEmail={"name@gmail.com"} handlePageChange={handlePageChange} />
            default:
              return (
                <div className="text-white text-3xl text-center">
                  Page not found !
                  <button
                    className="text-blue-500 hover:underline text-lg"
                    onClick={() => {
                      handlePageChange("landingpage");
                    }}
                  >
                    Return
                  </button>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default App;
