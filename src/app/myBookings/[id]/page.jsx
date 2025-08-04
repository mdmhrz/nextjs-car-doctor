import BookingUpdateForm from '@/app/components/BookingUpdateForm/BookingUpdateForm';
import PageBanner from '@/app/components/PageBanner/PageBanner';
import { headers } from 'next/headers';
import React from 'react';

const BookingUpdatePage = async ({ params }) => {
    const p = await params;
    const res = await fetch(`https://nextjs-car-doctor-amber.vercel.app/api/my-bookings/${p.id}`, {
        headers: new Headers(await headers())
    });
    const booking = await res.json();
    console.log(booking);
    return (
        <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
            <PageBanner
                title="Update Bookigs"
                image="/assets/images/banner/4.jpg"
                breadcrumbText="Home / Update Bookings"
            />
            <BookingUpdateForm booking={booking} ></BookingUpdateForm>
        </div>
    );
};

export default BookingUpdatePage;