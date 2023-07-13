
interface ToggleSwitchProps {
    fun: () => void
}

export const ToggleSwitch = ({ fun }: ToggleSwitchProps) => {

    return(
        <>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </>
    )
}
