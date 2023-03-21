import { useRouter } from 'next/router'
const ErrorPage = () => {
    const router = useRouter();
    return <>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <h4 className="display-5 fw-bold">404 | This Page Not Found</h4>
            <button className="btn btn-info" onClick={() => router.push('/')}>Go to Home Page</button>
        </div>
    </>
}

export default ErrorPage;