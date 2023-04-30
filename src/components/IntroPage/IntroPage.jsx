import React, { useEffect } from 'react';
import './intro.css';
import  AOS  from 'aos';
import { Link } from 'react-router-dom';

export default function IntroPage() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    return () => {
        
    }
    },[])
    
    return (<>
        <section className="introHeader">
            <div className='Blur d-flex justify-content-center align-items-center'>
                <div data-aos="zoom-in-down" className="nav d-flex justify-content-between align-items-center">
                    <div className='brandIcon'>
                        <h3>
                            <span className='CapitalCharacter'>V</span>
                            <span className='SmallCharacter'>ilm</span> 
                        </h3>
                    </div>
                    <div className='registerLink'>
                        <Link to='./register'>
                        <h3>
                            <span className='CapitalCharacter'>S</span>
                            <span className='SmallCharacter'>ign up</span> 
                        </h3>
                        </Link>
                    </div>
                </div>
            <div  data-aos="zoom-in-up" className="headerDesc">
                <p className='text-white fy-JosefinSans text-center'>
                    Enjoy the trending movies plateform
                    Login and enjoy .
                </p>
                <span className='w-100'>
                    <div class="wrap">
                    <Link class="button fy-Aquire text-decoration-none text-center" to='/register'>
                        Get start
                        <i className="fa-regular fa-circle-play fa-xl mx-2"></i>
                    </Link>
                    
                    </div>
                </span>
            </div>
            </div>
        </section>
    </>
    )
}
