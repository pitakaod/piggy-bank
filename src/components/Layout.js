import Head from "next/head";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/utils/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-inter",
    weights: [400, 500, 600, 700],
});
export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                <meta
                    name="description"
                    content={
                        "Website application created to authenticate and get state for personal using"
                    }
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <main className={cn("font-sans antialiased", fontSans.variable)}>
                <div className="flex flex-col relative z-10  min-h-screen w-full max-w-[660px] pt-[8rem] md:pt-[10rem]">
                    <div className="container_inner pb-14 pt-4 mx-4 bg-morphism">
                        {children}
                    </div>
                </div>
            </main>
            <style jsx>
                {`
                    .bg-morphism {
                        background: rgba(255, 255, 255, 0.18);
                        border-radius: 16px;
                        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                    }

                    .container__inner {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                `}
            </style>
        </>
    );
}
