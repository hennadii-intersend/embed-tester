import { useEffect } from "react";
import { useImpersonatorIframe } from "../contexts/ImpersonatorIframeContext";

interface Props {
  width: number | string;
  height: number | string;
  src: string;
  address: string;
  rpcUrl: string;
  onLoad?: () => void;
}

export const ImpersonatorIframe = ({
  width,
  height,
  src,
  address,
  rpcUrl,
  onLoad,
}: Props) => {
  const { iframeRef, setAddress, setAppUrl, setRpcUrl, isReady } =
    useImpersonatorIframe();

  useEffect(() => {
    if (src && address && setAddress) {
      setAppUrl(src);
      setAddress(address);
      setRpcUrl(rpcUrl);
    }
  }, [src, setAppUrl, address, setAddress, rpcUrl, setRpcUrl]);

  return isReady ? (
    <iframe
      width={width}
      height={height}
      style={{
        background: "white",
        borderRadius: "10px", // Add this line for rounded corners
        border: "1px solid #ccc", // Optional: add a border for better visibility
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: add a shadow for depth
      }}
      src={src}
      ref={iframeRef}
      onLoad={onLoad}
    />
  ) : null;
};