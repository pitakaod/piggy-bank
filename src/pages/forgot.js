import { Title } from "@/components/Title";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPage() {
    const [value, setValue] = useState("");

    const validate = () =>
        value.length === 10 &&
        value.startsWith("0") &&
        !isNaN(Number.parseInt(value));
    return (
        <>
            <div>
                <Title subtitle={"Authentication"} />
                <div
                    className={
                        "mt-8 mb-4 md:pl-28 text-md text-slate-500 font-bold"
                    }
                >
                    <div>Please enter your phone number:</div>
                </div>
                <div className={"flex space-y-4 justify-center px-28"}>
                    <PhoneInput
                        isValid={validate}
                        value={value}
                        onChange={setValue}
                        masks={{ th: "... ... ...." }}
                        country={"th"}
                        placeholder={"012 345 6789"}
                        specialLabel={"Mobile number"}
                        disableCountryCode
                        inputStyle={{ width: "100%" }}
                        disableDropdown
                        disableCountryGuess
                        inputProps={{
                            name: "phone",
                            required: true,
                            autoFocus: true,
                            autoComplete: "off",
                        }}
                    />
                </div>
                <div className="w-full mt-4 md:mt-2 flex justify-center">
                    <motion.button className="w-full sm:w-[65%] bg-piggy-primary hover:bg-piggy-secondary text-white font-bold py-3 px-4 rounded-lg mt-4 transition duration-300 hover:scale-105">
                        Send OTP
                    </motion.button>
                </div>
            </div>
        </>
    );
}
