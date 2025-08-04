import CheckoutForm from '@/app/components/CheckoutForm/CheckoutForm';
import PageBanner from '@/app/components/PageBanner/PageBanner';
import React from 'react';

const Checkout = async ({ params }) => {
    const p = await params;
    const singleServiceResponse = await fetch(`https://nextjs-car-doctor-amber.vercel.app/api/service/${p.id}`)
    const service = await singleServiceResponse.json();


    return (
        <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
            <PageBanner
                title="Checkout"
                image="/assets/images/banner/4.jpg"
                breadcrumbText="Home / Checkout"
            />
            <CheckoutForm service={service}></CheckoutForm>

        </div>
    );
};

export default Checkout;