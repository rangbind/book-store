import Link from 'next/link';
import { AiOutlineUserAdd } from 'react-icons/ai';
const Registration = () => {
    return <>
        <div className="row">
            <div className="col-sm-4 offset-4 mt-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-sm-12">
                            <div className="card-body">
                                <h1 className="card-title text-center"><AiOutlineUserAdd/></h1>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="full_name">Full Name:</lavel>
                                    <input className="form-control" id="full_name" type='text' name="full_name" placeholder="Full Name" required></input>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="mobile">Mobile:</lavel>
                                    <input className="form-control" id="mobile" type='text' name="mobile" placeholder="Mobile" required></input>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="email">Email:</lavel>
                                    <input className="form-control" id="email" type='text' name="email" placeholder="Email" required></input>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="Gender">Gender:</lavel>
                                    <select className="form-control" id="gender" name="gender" required>
                                        <option>Choose Gender</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="password">Password:</lavel>
                                    <input className="form-control" id="password" type="password" name="password" placeholder="Password" required></input>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="confirm_password">Confirm password:</lavel>
                                    <input className="form-control" id="confirm_password" type="confirm_password" name="confirm_password" placeholder="Confirm Password" required></input>
                                </div>                               
                                <div className="form-group mb-3">
                                    <button className="btn btn-success w-100">CREATE ACCOUNT</button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Registration;