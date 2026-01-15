interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'accent';
}

const Button = ({ label, icon, onClick, className = '', variant = 'primary' }: ButtonProps) => {
    const variants = {
        primary: 'btn-cute',
        secondary: 'bg-white text-primary border-2 border-primary/20 hover:bg-violet-50 px-6 py-3 rounded-2xl transition-all',
        accent: 'bg-accent text-white hover:bg-rose-600 px-6 py-3 rounded-2xl transition-all shadow-lg shadow-rose-200'
    }

    return (
        <button
            onClick={onClick}
            className={`${variants[variant]} ${className}`}
        >
            {label}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    )
}

export default Button
