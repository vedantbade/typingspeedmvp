export function calculateGrossWPM(
    totalChars: number,
    elapsedSeconds: number
): number {
    if (elapsedSeconds <= 0) return 0;
    const minutes = elapsedSeconds / 60;
    return Math.round(totalChars / 5 / minutes);
}

export function calculateNetWPM(
    grossWPM: number,
    uncorrectedErrors: number,
    elapsedSeconds: number
): number {
    if (elapsedSeconds <= 0) return 0;
    const minutes = elapsedSeconds / 60;
    const netWPM = grossWPM - uncorrectedErrors / minutes;
    return Math.max(0, Math.round(netWPM));
}

export function calculateAccuracy(
    correctChars: number,
    totalChars: number
): number {
    if (totalChars <= 0) return 100;
    return Math.round((correctChars / totalChars) * 100);
}
