export default function PageContainer({children} = {}) {
    return (
        <div style={{height: "100%", width: "100%"}}>
            {children}
        </div>
    )
}