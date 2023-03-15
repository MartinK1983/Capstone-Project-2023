import LoadingSpinner from "./loadingSpinner";

export default function PageLoader() {
    return (
        <div style={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <LoadingSpinner size={40} />
        </div>
    )
}