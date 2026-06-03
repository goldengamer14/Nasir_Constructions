// frontend/src/components/ProductShowcase.tsx

import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { ProductCard, ProductRowProps } from "@/types";

// ─── Star Rating ────────────────────────────────────────────────────────────

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount?: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    return (
        <div className="flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => {
                    const filled = i < fullStars;
                    const half = !filled && i === fullStars && hasHalf;
                    return (
                        <span key={i} className="relative inline-block">
                            {/* Background star (empty) */}
                            <Star
                                size={13}
                                className="text-muted-foreground/30"
                                fill="currentColor"
                            />
                            {/* Foreground star (filled or half) */}
                            {(filled || half) && (
                                <span
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ width: half ? "50%" : "100%" }}
                                >
                                    <Star size={13} className="text-amber-400" fill="currentColor" />
                                </span>
                            )}
                        </span>
                    );
                })}
            </div>
            <span className="text-[10px] text-muted-foreground tabular-nums">
                {rating.toFixed(1)}{reviewCount ? ` (${reviewCount})` : ""}
            </span>
        </div>
    );
};

// ─── Single Product Card ─────────────────────────────────────────────────────

const ProductCardItem = ({ product }: { product: ProductCard }) => {
    const [imgError, setImgError] = useState(false);

    // Emoji fallback based on category
    const fallbackEmoji = product.category === "farm" ? "🌾" : "🏗️";

    return (
        <Link
            to={`/products/${product.id}`}
            className="block flex-shrink-0 w-44 sm:w-48"
        >
            <div className="group relative flex flex-col h-full rounded-[var(--radius)] border border-border bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground shadow">
                        {product.badge}
                    </span>
                )}

                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    {!imgError ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        // Fallback when image doesn't exist yet
                        <div className="w-full h-full flex flex-col items-center justify-center bg-primary/10 gap-1">
                            <span className="text-4xl">{fallbackEmoji}</span>
                            <span className="text-[10px] text-muted-foreground text-center px-2 leading-tight">
                                {product.nameLocal || product.name}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-3 gap-2">
                    {/* Name */}
                    <div>
                        <h4 className="text-sm font-semibold text-card-foreground leading-tight line-clamp-1">
                            {product.name}
                        </h4>
                        {product.nameLocal && (
                            <span className="text-[11px] text-muted-foreground">{product.nameLocal}</span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2 flex-1">
                        {product.description}
                    </p>

                    {/* Rating */}
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />

                    {/* Price + Unit */}
                    {(product.priceLabel || product.unit) && (
                        <div className="flex flex-col items-center mt-1">
                            {product.priceLabel && (
                                <span className="text-sm font-bold text-primary">{product.priceLabel}</span>
                            )}
                            {product.unit && (
                                <span className="text-[10px] text-muted-foreground">{product.unit}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

// ─── Scrollable Product Row ──────────────────────────────────────────────────

const AUTO_SCROLL_INTERVAL = 3000; // ms
const SCROLL_AMOUNT = 208; // px per arrow click (≈ card width + gap)

const ProductRow = ({ title, titleLocal, products }: ProductRowProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }, []);

    const scrollBy = useCallback((direction: "left" | "right") => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: "smooth" });
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (isHovered) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        intervalRef.current = setInterval(() => {
            const el = trackRef.current;
            if (!el) return;

            // If at the end, jump back to start (instant, then resume smooth)
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
            }
        }, AUTO_SCROLL_INTERVAL);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered]);

    // Scroll state listener
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateScrollState, { passive: true });
        updateScrollState();
        return () => el.removeEventListener("scroll", updateScrollState);
    }, [updateScrollState]);

    return (
        <div className="space-y-3">
            {/* Row Heading */}
            <div className="flex items-baseline gap-3 px-1">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <span className="text-base text-muted-foreground font-medium">— {titleLocal}</span>
            </div>

            {/* Scroll container */}
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left arrow */}
                <button
                    type="button"
                    aria-label="Scroll left"
                    onClick={() => scrollBy("left")}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2
            flex h-9 w-9 items-center justify-center rounded-full
            bg-card border border-border shadow-md
            text-foreground hover:bg-primary hover:text-primary-foreground
            transition-all duration-200
            ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Cards track */}
                <div
                    ref={trackRef}
                    className="flex gap-3 overflow-x-auto scroll-smooth pb-2 px-1
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {products.map((product) => (
                        <ProductCardItem key={product.id} product={product} />
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    type="button"
                    aria-label="Scroll right"
                    onClick={() => scrollBy("right")}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2
            flex h-9 w-9 items-center justify-center rounded-full
            bg-card border border-border shadow-md
            text-foreground hover:bg-primary hover:text-primary-foreground
            transition-all duration-200
            ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

// ─── Main Export: ProductShowcase ────────────────────────────────────────────

interface ProductShowcaseProps {
    rows: ProductRowProps[];
}

export const ProductShowcase = ({ rows }: ProductShowcaseProps) => {
    if (!rows.length) return null;

    return (
        <section className="space-y-8 px-2">
            {rows.map((row) => (
                <ProductRow
                    key={row.title}
                    title={row.title}
                    titleLocal={row.titleLocal}
                    products={row.products}
                />
            ))}
        </section>
    );
};
