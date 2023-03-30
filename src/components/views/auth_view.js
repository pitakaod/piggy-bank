import OtpInput_Custom from "@/components/OtpInput";
import { motion } from "framer-motion";
import { useState } from "react";
import { Title } from "@/components/Title";
import Link from "next/link";

export function AuthView() {
    const [otpValue, setOptValue] = useState("");

    const handleOtpValueChange = (otpValue) => {
        setOptValue(otpValue);
    };

    return (
        <>
            <Title subtitle={"Authentication"} />
            <div className="mt-8 md:mt-14 px-8 md:px-16">
                <div className="flex sm:pl-8 md:pl-16 mb-2">
                    <h1 className="text-md text-slate-500 font-bold">
                        Enter your PIN
                    </h1>
                </div>

                <OtpInput_Custom
                    valueLength={6}
                    value={otpValue}
                    onChange={handleOtpValueChange}
                />

                <div className="flex flex-col items-end mt-4">
                    <div className="-mt-2 md:pr-20">
                        <Link href={"/forgot"}>
                            <button className="text-sm md:text-md italic hover:text-blue-600">
                                Forgot your PIN?
                            </button>
                        </Link>
                    </div>
                    <div className="w-full mt-4 md:mt-2 flex justify-center">
                        <motion.button className="w-full sm:w-[70%] bg-piggy-primary hover:bg-piggy-secondary text-white font-bold py-3 px-4 rounded-lg mt-4 transition duration-300 hover:scale-105">
                            Verify
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    );
}
