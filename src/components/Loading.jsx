import loadingImage from "../images/loading.png"

export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingImage} className="loading-image" alt="Loading" />
        </div>
    )
}