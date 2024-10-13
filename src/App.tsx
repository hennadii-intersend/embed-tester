import { useState } from "react";
import { ImpersonatorIframe } from "./components/ImpersonatorIframe";

function App() {
  const [inputValue, setInputValue] = useState("https://bookmaker.xyz/");
  const [iframeSrc, setIframeSrc] = useState(inputValue);

  const handleUpdateIframe = () => {
    setIframeSrc(inputValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, white, #007BFF)", // Gradient background
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter URL"
          style={{
            width: "1000px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleUpdateIframe}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Update Embed
        </button>
      </div>
      <ImpersonatorIframe
        width={"1200px"}
        height={"900px"}
        src={iframeSrc}
        address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" // vitalik.eth
        rpcUrl="https://eth.llamarpc.com"
      />
    </div>
  );
}

export default App;