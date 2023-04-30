import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS  from 'aos';

export default function Register() {
    useEffect(() => {

    
    return () => {
        AOS.init({duration: 1300})
    }
    }, [])
    
    return (<>
    <section className="RegisterSection">
        <div className='Blur'>
        <div className="container">
            <div className="row">
                <div className='col-md-7 d-flex justify-content-center align-items-center flex-wrap'>
                    <div className="leftSide" data-aos="flip-down">
                        <div className='brandName w-100 d-flex justify-content-center align-items-end'>
                            <p>
                                <span className='CapitalCharacter m-0'>V</span>
                                <span className='SmallCharacter m-0'>ilm</span>
                            </p>
                        <div className='brandLogo'>
                            <span className="regtangel d-flex justify-content-around align-items-center">
                                <span className='point_one'></span>
                                <span className='pill'></span>
                                <span className='point_two'></span>
                                <span className='point_three'></span>
                                <span className='point_four'></span>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 d-flex justify-content-center align-items-center p-2'>
                    <div data-aos="fade-down" data-aos-easing="linear" className="registerForm w-100 p-2 mt-4">
                        <form className='w-100'>
                                <div className='formHeader text-center my-1'>
                                    <h3 className='fw-light fy-DMSans-Bold text-white'>Sign up</h3>
                                </div>
                                <label className='text-white' htmlFor="first-name">First name :</label>
                                <input data-aos="fade-down-left" data-aos-delay="1500" data-aos-duration="1050" class="form-control  my-1" type="text" placeholder='Enter first name .'  id='first-name'/>
                                
                                <label className='text-white' htmlFor="last-name">Last name :</label>
                                <input data-aos="fade-up-right" data-aos-delay="1500" data-aos-duration="1050" class="form-control  my-1" type="text" placeholder='Enter last name .' id='last-name' />
                                
                                <label className='text-white' htmlFor="email">Email :</label>
                                <input data-aos="fade-down-left" data-aos-delay="1500" data-aos-duration="1050" class="form-control my-1" type="email" placeholder='Enter valid email .' id='email'/>
                                
                                <label className='text-white' htmlFor="password">Password :</label>
                                <input data-aos="fade-up-right" data-aos-delay="1500" data-aos-duration="1050" class="form-control my-1" type="text" placeholder='Enter strong password .'  id="password" />
                                
                                <label className='text-white' htmlFor="confirm-password">Confirm password :</label>
                                <input data-aos="fade-down-left" data-aos-delay="1500" data-aos-duration="1050" class="form-control my-1" type="text" placeholder='Retype your password .' id='confirm-password'/>
                                
                                <button class="btn w-100 my-1 fw-semibold text-white" type="button">Sign Up</button>
                                
                                <div className='w-100 text-center'>
                                    <Link class="haveAcc w-100 my-1 fw-semibold text-white" to='/login'>I already have an account .</Link>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
    )
}
