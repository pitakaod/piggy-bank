import { useEffect, useMemo } from "react";

const RE_DIGIT = new RegExp(/^\d+$/);
export default function OtpInput_Custom({
    value,
    valueLength,
    onChange,
    setDisplay,
}) {
    const valueItems = useMemo(() => {
        const valueArray = value.split("");
        const items = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push("");
            }
        }

        return items;
    }, [value, valueLength]);
    const inputOnChange = (e, idx) => {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== "") {
            return;
        }

        const nextInputEl = target.nextElementSibling || null;

        // only delete digit if next input element has no value
        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : " ";

        const targetValueLength = targetValue.length;

        if (targetValueLength === 1) {
            const newValue =
                value.substring(0, idx) +
                targetValue +
                value.substring(idx + 1);

            onChange(newValue);

            if (!isTargetValueDigit) {
                return;
            }

            const nextElementSibling = target.nextElementSibling || null;

            if (nextElementSibling) {
                nextElementSibling.focus();
            }
        } else if (targetValueLength === valueLength) {
            onChange(targetValue);

            target.blur();
        }
    };

    const inputOnFocus = (e) => {
        const { target } = e;

        // keep focusing back until previous input
        // element has value
        const prevInputEl = target.previousElementSibling || null;

        if (prevInputEl && prevInputEl.value === "") {
            return prevInputEl.focus();
        }

        target.setSelectionRange(0, target.value.length);
    };

    const focusToNextInput = (target) => {
        const nextElementSibling = target.nextElementSibling || null;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };
    const focusToPrevInput = (target) => {
        const previousElementSibling = target.previousElementSibling || null;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnKeyDown = (e) => {
        const { key } = e;
        const target = e.target;

        if (key === "ArrowRight" || key === "ArrowDown") {
            e.preventDefault();
            return focusToNextInput(target);
        }

        if (key === "ArrowLeft" || key === "ArrowUp") {
            e.preventDefault();
            return focusToPrevInput(target);
        }

        const targetValue = target.value;

        if (e.key !== "Backspace" || targetValue !== "") {
            return;
        }

        focusToPrevInput(target);
    };

    useEffect(() => {
        const firstInputEl = document.querySelector(".otp-input");

        if (firstInputEl) {
            firstInputEl.focus();
        }
    }, []);

    return (
        <>
            <div className="otp-group mx-auto">
                {valueItems.map((digit, idx) => (
                    <input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="\d{1}"
                        maxLength={valueLength}
                        className="otp-input"
                        onFocus={inputOnFocus}
                        onKeyDown={inputOnKeyDown}
                        onChange={(e) => inputOnChange(e, idx)}
                        value={digit}
                    />
                ))}
            </div>
            <style jsx>{`
                .otp-group {
                    display: flex;
                    max-width: 360px;
                    width: 100%;
                    column-gap: 10px;
                }

                .otp-input {
                    max-width: 50px;
                    width: 100%;
                    height: 60px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 32px;
                    font-weight: bold;
                    line-height: 1;
                }

                .otp-input::selection {
                    background-color: #ccc;
                }
            `}</style>
        </>
    );
}
