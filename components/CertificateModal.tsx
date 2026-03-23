"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

interface CertificateModalProps {
    targetWpm: number;
    wpm: number;
    accuracy: number;
    onClose: () => void;
}

export default function CertificateModal({
    targetWpm,
    wpm,
    accuracy,
    onClose,
}: CertificateModalProps) {
    const [name, setName] = useState("");
    const [generated, setGenerated] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const drawCertificate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = 1200;
        const H = 850;
        canvas.width = W;
        canvas.height = H;

        // ---------- Background ----------
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, W, H);

        // Subtle gradient overlay
        const bgGrad = ctx.createLinearGradient(0, 0, W, H);
        bgGrad.addColorStop(0, "rgba(16, 185, 129, 0.08)");
        bgGrad.addColorStop(0.5, "rgba(15, 23, 42, 0)");
        bgGrad.addColorStop(1, "rgba(20, 184, 166, 0.08)");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // ---------- Border ----------
        const borderInset = 30;
        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        roundRect(ctx, borderInset, borderInset, W - borderInset * 2, H - borderInset * 2, 16);
        ctx.stroke();

        // Inner border
        const innerInset = 40;
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        roundRect(ctx, innerInset, innerInset, W - innerInset * 2, H - innerInset * 2, 12);
        ctx.stroke();

        // ---------- Corner accents ----------
        drawCornerAccent(ctx, borderInset + 10, borderInset + 10, 1, 1);
        drawCornerAccent(ctx, W - borderInset - 10, borderInset + 10, -1, 1);
        drawCornerAccent(ctx, borderInset + 10, H - borderInset - 10, 1, -1);
        drawCornerAccent(ctx, W - borderInset - 10, H - borderInset - 10, -1, -1);

        // ---------- Top decorative line ----------
        const lineGrad = ctx.createLinearGradient(200, 0, W - 200, 0);
        lineGrad.addColorStop(0, "rgba(16, 185, 129, 0)");
        lineGrad.addColorStop(0.3, "rgba(16, 185, 129, 0.6)");
        lineGrad.addColorStop(0.5, "rgba(20, 184, 166, 0.8)");
        lineGrad.addColorStop(0.7, "rgba(16, 185, 129, 0.6)");
        lineGrad.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(W - 200, 100);
        ctx.stroke();

        // ---------- Website name ----------
        ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
        ctx.font = "600 14px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.letterSpacing = "6px";
        ctx.fillText("TYPESPRINTS", W / 2, 80);
        ctx.letterSpacing = "0px";

        // ---------- Title ----------
        ctx.fillStyle = "#10b981";
        ctx.font = "700 16px Inter, system-ui, sans-serif";
        ctx.letterSpacing = "8px";
        ctx.fillText("CERTIFICATE OF ACHIEVEMENT", W / 2, 145);
        ctx.letterSpacing = "0px";

        // ---------- Subtitle ----------
        ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
        ctx.font = "400 15px Inter, system-ui, sans-serif";
        ctx.fillText("This certificate is proudly presented to", W / 2, 220);

        // ---------- User name ----------
        ctx.fillStyle = "#f1f5f9";
        ctx.font = "700 48px Inter, system-ui, sans-serif";
        ctx.fillText(name, W / 2, 290);

        // Name underline
        const nameWidth = ctx.measureText(name).width;
        const underlineGrad = ctx.createLinearGradient(
            W / 2 - nameWidth / 2 - 30, 0,
            W / 2 + nameWidth / 2 + 30, 0
        );
        underlineGrad.addColorStop(0, "rgba(16, 185, 129, 0)");
        underlineGrad.addColorStop(0.5, "rgba(16, 185, 129, 0.5)");
        underlineGrad.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.strokeStyle = underlineGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(W / 2 - nameWidth / 2 - 30, 305);
        ctx.lineTo(W / 2 + nameWidth / 2 + 30, 305);
        ctx.stroke();

        // ---------- Achievement text ----------
        ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
        ctx.font = "400 15px Inter, system-ui, sans-serif";
        ctx.fillText("for successfully passing the", W / 2, 370);

        // ---------- WPM Badge ----------
        const badgeText = `${targetWpm} WPM Typing Test`;
        ctx.fillStyle = "#10b981";
        ctx.font = "700 36px Inter, system-ui, sans-serif";
        ctx.fillText(badgeText, W / 2, 420);

        // ---------- Stats ----------
        ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.font = "400 14px Inter, system-ui, sans-serif";
        ctx.fillText(
            `Speed: ${wpm} WPM  ·  Accuracy: ${accuracy}%  ·  Duration: 60 seconds`,
            W / 2,
            480
        );

        // ---------- Bottom decorative line ----------
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(200, 530);
        ctx.lineTo(W - 200, 530);
        ctx.stroke();

        // ---------- Date ----------
        ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
        ctx.font = "400 14px Inter, system-ui, sans-serif";
        ctx.fillText(`Issued on ${currentDate}`, W / 2, 580);

        // ---------- Seal / Badge area ----------
        // Outer circle
        ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(W / 2, 680, 55, 0, Math.PI * 2);
        ctx.stroke();

        // Inner circle
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(W / 2, 680, 45, 0, Math.PI * 2);
        ctx.stroke();

        // Checkmark inside
        ctx.fillStyle = "#10b981";
        ctx.font = "700 32px Inter, system-ui, sans-serif";
        ctx.fillText("✓", W / 2, 692);

        // "VERIFIED" below seal
        ctx.fillStyle = "rgba(16, 185, 129, 0.5)";
        ctx.font = "600 10px Inter, system-ui, sans-serif";
        ctx.letterSpacing = "4px";
        ctx.fillText("VERIFIED", W / 2, 755);
        ctx.letterSpacing = "0px";

        // ---------- Footer ----------
        ctx.fillStyle = "rgba(100, 116, 139, 0.4)";
        ctx.font = "400 11px Inter, system-ui, sans-serif";
        ctx.fillText("typesprints.com", W / 2, 800);
    }, [name, targetWpm, wpm, accuracy, currentDate]);

    const handleGenerate = useCallback(() => {
        if (!name.trim()) return;
        setGenerated(true);
        // Draw after state update
        setTimeout(() => drawCertificate(), 50);
    }, [name, drawCertificate]);

    const handleDownload = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement("a");
        link.download = `TypeSprints_Certificate_${targetWpm}WPM_${name.replace(/\s+/g, "_")}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    }, [name, targetWpm]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Enter") handleGenerate();
            if (e.key === "Escape") onClose();
        },
        [handleGenerate, onClose]
    );

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 w-[95%] max-w-2xl
                transform animate-scaleIn border border-zinc-200 dark:border-zinc-700 transition-colors duration-300
                max-h-[90vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        🎓 Download Certificate
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200
                            hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Name Input */}
                {!generated && (
                    <div className="space-y-4">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {"Enter your name as you'd like it to appear on your certificate."}
                        </p>
                        <input
                            ref={inputRef}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600
                                bg-zinc-50 dark:bg-zinc-700/50 text-zinc-900 dark:text-zinc-100
                                placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                                transition-all duration-200 text-lg"
                            maxLength={50}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={!name.trim()}
                            className="w-full py-3.5 rounded-xl font-semibold text-white
                                bg-gradient-to-r from-emerald-500 to-teal-500
                                hover:from-emerald-600 hover:to-teal-600
                                disabled:opacity-50 disabled:cursor-not-allowed
                                active:scale-[0.98] transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
                                dark:focus:ring-offset-zinc-800"
                        >
                            Generate Certificate
                        </button>
                    </div>
                )}

                {/* Certificate Preview + Download */}
                {generated && (
                    <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
                            <canvas
                                ref={canvasRef}
                                className="w-full h-auto"
                                style={{ imageRendering: "auto" }}
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setGenerated(false)}
                                className="flex-1 py-3 rounded-xl font-medium text-zinc-600 dark:text-zinc-300
                                    bg-zinc-100 dark:bg-zinc-700
                                    hover:bg-zinc-200 dark:hover:bg-zinc-600
                                    active:scale-[0.98] transition-all duration-200"
                            >
                                ← Edit Name
                            </button>
                            <button
                                onClick={handleDownload}
                                className="flex-1 py-3 rounded-xl font-semibold text-white
                                    bg-gradient-to-r from-emerald-500 to-teal-500
                                    hover:from-emerald-600 hover:to-teal-600
                                    active:scale-[0.98] transition-all duration-200
                                    focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
                                    dark:focus:ring-offset-zinc-800"
                            >
                                ⬇ Download PNG
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Helper: draw rounded rectangle path
function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
) {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

// Helper: draw decorative corner accent
function drawCornerAccent(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    dirX: number,
    dirY: number
) {
    const len = 30;
    ctx.strokeStyle = "rgba(16, 185, 129, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + dirY * len);
    ctx.lineTo(x, y);
    ctx.lineTo(x + dirX * len, y);
    ctx.stroke();
}
