import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const servicesCollection = await dbConnect(collectionName.SERVICES);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    // console.log(data);
    return NextResponse.json(data)
}


export const DELETE = async (req, { params }) => {
    const session = getServerSession(authOptions);
    const p = await params;
    const bookingCollection = dbConnect(collectionName.BOOKINGS);
    const query = { _id: new ObjectId(p.id) }

    //validation
    const currentBooking = await bookingCollection.findOne(query);
    const isOwnerOK = session?.user?.email == currentBooking.email;

    if (isOwnerOK) {
        const result = await bookingCollection.deleteOne(query);
        revalidatePath('/myBookings')
        return NextResponse.json(result)

    } else {
        return NextResponse.json({ success: false, message: 'Forbidden Action' }, { status: 401 })
    }

    //Deleting user specific booking
}
