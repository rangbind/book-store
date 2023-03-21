import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className='nav-link active' href='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="book-listing" tabindex="-1" aria-disabled="true">Book List</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link href='/user-cart'>
                                <AiOutlineShoppingCart className='me-2 fs-4 text-dark'/>
                            </Link>
                            <Link href='/login'>
                                <MdAccountCircle className='me-2 fs-4 text-dark'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;