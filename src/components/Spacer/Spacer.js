export default function Spacer({
    height,
    width
}) {
    let cssInJs = {
        height: height,
        width: width,
    }
    return(
        <div style={cssInJs}></div>
    )
}