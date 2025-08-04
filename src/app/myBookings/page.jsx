import PageBanner from '../components/PageBanner/PageBanner';
import MyBookingsTable from '../components/MyBookingsTable/MyBookingsTable';
import { headers } from 'next/headers';

const fetchBookings = async () => {
    const response = await fetch('http://localhost:3000/api/service', {
        headers: await headers()
    });
    const data = await response.json()
    return data;
}


const MyBookings = async () => {
    const bookings = await fetchBookings()
    console.log(bookings);

    return (
        <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
            <PageBanner
                title="My Bookings"
                image="/assets/images/banner/4.jpg"
                breadcrumbText="Home / My Bookings"
            />
            <MyBookingsTable bookings={bookings}></MyBookingsTable>
        </div>
    );
};

export default MyBookings;