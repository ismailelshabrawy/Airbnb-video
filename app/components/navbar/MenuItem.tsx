'use client';

interface MenItemProps {
    onClick: () => void;
    label: string;
}

const MenItem: React.FC<MenItemProps> = ({
    onClick,
    label
}) => {

    return (
        <div
          onClick={onClick}
          className="
           px-4
           py-3
           hover:bg-neutral-100
           transtion
           font-semibold
          "
        >
            {label}
        </div>

    )
    
    }

    export default MenItem;