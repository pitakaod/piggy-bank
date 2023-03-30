import Image from "next/image";
import titlePNG from "../../public/images/piggy-title.png";

export function Title({ subtitle }) {
    return (
        <>
            <div>
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-36 md:w-48 mx-auto"
                />
            </div>
            <div className="flex justify-center flex-col items-center">
                {subtitle && (
                    <div className={"text-xl md:text-2xl font-boontook"}>
                        {subtitle}
                    </div>
                )}
                <Image
                    src={titlePNG}
                    alt={"smart piggy bank title"}
                    className={" px-6 md:px-12"}
                />
            </div>
        </>
    );
}
