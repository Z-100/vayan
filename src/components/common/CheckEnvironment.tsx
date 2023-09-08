
interface CheckEnvironmentProps {
    component: Object
}

export const CheckEnvironment = ({ component }: CheckEnvironmentProps) => {

    return(
        <>
            {process.env.REACT_APP_ENV === 'DEV' ? component : undefined}
        </>
    );
}
