import Menu from "./Menu"



function BaseLayout(props) {
    return(
        <>
            <Menu />
            {props.children}
            <h1>footer</h1>
        </>
    )
}

export default BaseLayout