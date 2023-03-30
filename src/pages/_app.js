import "@/styles/globals.css";
import "react-phone-input-2/lib/material.css";
import Image from "next/image";
import Layout from "@/components/Layout";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout title={"Smart Piggy Bank"}>
                <Component {...pageProps} />
            </Layout>
            <TailwindIndicator />
            <div className="fixed inset-0" style={{ zIndex: 0 }}>
                <Image
                    src="/images/bg_coin.jpg"
                    alt="Background picture"
                    priority
                    fill={"cover"}
                    objectFit={"cover"}
                />
            </div>
            <style jsx global>{`
                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    align-items: center;
                    background-color: #f5f5f5;
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-family: "Roboto", sans-serif;
                    color: #333;
                }
            `}</style>
        </>
    );
}
