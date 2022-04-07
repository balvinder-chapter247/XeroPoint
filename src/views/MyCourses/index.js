import React from 'react'
import { Link } from 'react-router-dom';
import InnerPageBanner from '../../components/InnerPageBanner';
import Pagination from '../../components/Pagination';
import coursesItem from './DataFake/CoursesItem';
import  './MyCourse.css'
import MyCourseList from './MyCoursesList';
import { AppRoutes } from "../../routes/AppRoutes";

const MyCourses = () => {
  return (
    <>
      <main className='bg-gray-100'>
        <InnerPageBanner title={"My Courses"} />
        <section className='sec-padding'>
          <div className='course-header border-b'>
            <div className='container mx-auto px-4 flex items-center justify-between pb-4'>
              <h2 className='font-bold text-3xl mb-0'>My Courses</h2>
              <Link to={AppRoutes.ADD_COURSE}>
                <button className='px-4 py-3 rounded blue-btn'>
                  Create Course +
                </button>
              </Link>
            </div>
          </div>

          <div className='container m-auto px-4'>
            <div className='my-3'>
              <select className='bg-gray-50 border max-w-max border-gray-300 text-gray-900 font-medium text-sm rounded-sm focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option selected>Showing: All Courses</option>
                <option value='1'>Purchased Courses</option>
                <option value='2'>In Progress Courses</option>
                <option value='3'>Created Courses</option>
              </select>
            </div>
            <MyCourseList data={coursesItem} />
            <Pagination />
          </div>
        </section>
      </main>
    </>
  );
};
export default MyCourses