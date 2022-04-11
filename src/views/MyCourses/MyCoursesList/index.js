import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import { checkCart } from '../../../helper/utility'

const MyCourseList = (myCourseData) => {

    const [cart, setCart] = useState([]);
    const addToCart = (courseList) => {
      let newCart = [...cart];
      let itemInCart = newCart.find((item) => courseList.id === item.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        itemInCart = {
          ...courseList,
          quantity: 1,
        };
        newCart.push(itemInCart);
      }
      setCart(newCart);
    };

    useEffect(() => {
      const retriveCarts = JSON.parse(localStorage.getItem("cart"));
      if (retriveCarts) setCart(retriveCarts);
    }, []);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const { data } = myCourseData;
    return (
      <>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6'>
          {data && data.length ? (
            <>
              {data.map((courseList, index) => (
                <div className='my_course_item relative bg-white shadow-sm hover:shadow-lg transition duration-500'>
                  <div className='overflow-hidden h-56 rounded-tl-md rounded-tr-md'>
                    <Link to='course-details'>
                      <img
                        className='h-56 w-full object-cover course_image'
                        src={courseList.courseImage}
                        alt=''
                      />
                    </Link>
                  </div>
                  {/* {
                                        courseList.courseType === "Create Course" ?
                                        <Link to="edit-course">
                                            <div className="edit-icon">
                                                <i className="fas fa-pencil"></i>
                                            </div>
                                        </Link> :

                                        <div className="edit-icon">
                                            <button onClick={saveCourse}>
                                                <i className="fas fa-shopping-cart"></i>
                                            </button>
                                        </div>
                                    } */}
                  <div className='p-6'>
                    <div className='course_content relative'>
                      <div className='price '>
                        <span>$</span> <span>{courseList.coursePrice}</span>
                      </div>
                      {/* <div className='flex items-center justify-between'> */}
                      <Link
                        to='#'
                        className={`blog_tag ${courseList.courseTagColor}`}
                      >
                        {courseList.courseTag}
                      </Link>

                      {/* </div> */}
                      <h5 className='leading-6 course_name'>
                        <Link
                          to='course-details'
                          className='font-medium block hover:text-blue-700'
                        >
                          {courseList.courseName}
                        </Link>
                      </h5>
                    </div>
                    <div className='flex items-center justify-between text-gray-600'>
                      <div className='course-owner flex items-center'>
                        <img src={courseList.courseOwnerProfile} alt='' />
                        <p className='mb-0 ml-3'>{courseList.courseOwner}</p>
                      </div>
                      <div className='course_date text-sm'>
                        <i className='fas fa-clock mr-2'></i>
                        <span className='date'>{courseList.courseDate}</span>
                      </div>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                      {courseList.courseType === "Create Course" ? (
                        <button className='mx-auto blue-btn-md rounded text-white border'>
                          <Link to='edit-course'>Edit Course </Link>
                        </button>
                      ) : checkCart(courseList.id, cart) ? (
                        <button
                          className='mx-auto blue-btn-md rounded text-white disable'
                          disabled
                        >
                          Added to Cart
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(courseList)}
                          // disabled={cart.some(cartItem => cartItem.id === courseList.id)}
                          className='mx-auto blue-btn-md rounded text-white'
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                    {/* <div className="course-owner flex items-center py-3">
                                            <img className='w-10 h-10 rounded-full mr-2 cover object-cover object-top' src={courseList.courseOwnerProfile} />
                                            <span>{courseList.courseOwner}</span>
                                        </div> */}
                    {/* <button className="absolute left-0 right-0  max-w-max bottom-4 m-auto bg-theme-color hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded">
                                        {courseList.courseButton}</button> */}
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </>
    );
}

export default MyCourseList