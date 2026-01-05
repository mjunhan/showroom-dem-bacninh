import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formats a number as VND (e.g., 5.000.000₫).
 * If the price is 0, returns "Liên hệ báo giá".
 */
export function formatVND(price: number): string {
    if (price === 0) return "Liên hệ báo giá";

    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    })
        .format(price)
        .replace("₫", "₫"); // Ensure the symbol is correct
}
