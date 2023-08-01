export const handleFocus = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref && ref.current) {
        ref.current.focus();
    }
}