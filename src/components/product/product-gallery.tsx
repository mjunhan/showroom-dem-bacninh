"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { SPRING_TRANSITION, HOVER_SCALE } from "@/lib/animation";

interface SanityImage {
    _key?: string;
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

interface ProductGalleryProps {
    images: SanityImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // If no images provided, return null
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage._key || selectedImage.asset._ref}
                        {...{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { ...SPRING_TRANSITION, opacity: { duration: 0.2 } }
                        } as any}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={urlFor(selectedImage).url()}
                            alt="Product image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnail Grid - Only show if multiple images */}
            {images.length > 1 && (
                <>
                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
                        {images.map((image, index) => {
                            const isSelected = (selectedImage._key || selectedImage.asset._ref) === (image._key || image.asset._ref);
                            return (
                                <motion.button
                                    key={image._key || image.asset._ref || index}
                                    onClick={() => setSelectedImage(image)}
                                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-slate-50"
                                    {...({
                                        whileHover: HOVER_SCALE,
                                        whileTap: { scale: 0.95 }
                                    } as any)}
                                >
                                    <Image
                                        src={urlFor(image).url()}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className={cn(
                                            "object-cover transition-opacity duration-200",
                                            isSelected ? "opacity-100" : "opacity-70 hover:opacity-100"
                                        )}
                                    />
                                    {isSelected && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-primary rounded-lg z-10"
                                            {...({
                                                layoutId: "active-ring",
                                                transition: SPRING_TRANSITION
                                            } as any)}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 mt-4 pb-2 scrollbar-hide no-scrollbar">
                        {images.map((image, index) => {
                            const isSelected = (selectedImage._key || selectedImage.asset._ref) === (image._key || image.asset._ref);
                            return (
                                <motion.button
                                    key={image._key || image.asset._ref || index}
                                    onClick={() => setSelectedImage(image)}
                                    className="relative aspect-square w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer bg-slate-50 snap-start"
                                    {...({
                                        whileTap: { scale: 0.95 }
                                    } as any)}
                                >
                                    <Image
                                        src={urlFor(image).url()}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className={cn(
                                            "object-cover transition-opacity duration-200",
                                            isSelected ? "opacity-100" : "opacity-70"
                                        )}
                                    />
                                    {isSelected && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-primary rounded-lg z-10"
                                            {...({
                                                layoutId: "active-ring-mobile",
                                                transition: SPRING_TRANSITION
                                            } as any)}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
