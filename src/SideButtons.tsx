type SideButtonsProp = {
    onClick: () => void
}

export default function SideButtons({ onClick }: SideButtonsProp){
    return <button onClick={onClick}>
        Input
        </button>
}