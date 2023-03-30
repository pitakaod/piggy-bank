import Image from "next/image";

export function UnlockedView() {
    return (
        <>
            <div className={"px-8 md:w-[500px]"}>
                <div>
                    <Image
                        src={"/images/logo-succeed.png"}
                        alt={"Unlocked successful logo"}
                        width={400}
                        height={400}
                        className={"mx-auto"}
                    />
                </div>
                <div>
                    <h1
                        className={
                            "text-2xl md:text-3xl font-boontook text-center text-[#3EB878]"
                        }
                    >
                        Unlocked Successful
                    </h1>
                </div>
            </div>
        </>
    );
}
