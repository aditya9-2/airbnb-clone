type OutlineButtonProps = {
    label: string;
    onClick?: () => void;
};

export function OutlineButton({ label, onClick }: OutlineButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="mt-6 cursor-pointer rounded-lg border border-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-50"
        >
            {label}
        </button>
    );
}