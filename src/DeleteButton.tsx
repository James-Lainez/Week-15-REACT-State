type DeleteButtonProps = {
    onClick: () => void
}

export default function DeleteButton({ onClick }: DeleteButtonProps){
    return <button className="p-1 my-2" onClick={onClick}>
        Delete
        </button>
}

