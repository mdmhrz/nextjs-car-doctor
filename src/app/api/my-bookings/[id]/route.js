import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionName.BOOKINGS);
    const query = { _id: new ObjectId(p?.id) };
    const singleBooking = await bookingCollection.findOne(query);

    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const isOwnerOK = email === singleBooking?.customer_email;
    if (isOwnerOK) {
        return NextResponse.json(singleBooking)
    }
    else {
        return NextResponse.json({ message: 'Forbidden access' }, { status: 403 })
    }


}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionName.BOOKINGS);
    const query = { _id: new ObjectId(p?.id) };
    const body = await req.json();

    //validate
    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const currentBooking = await bookingCollection.findOne(query);
    const isOwnerOK = email === currentBooking?.customer_email;

    if (isOwnerOK) {
        const filter = {
            $set: { ...body }
        }
        const option = {
            upsert: true
        }
        const updateResponse = await bookingCollection.updateOne(query, filter, option)
        revalidatePath('/myBookings')
        return NextResponse.json(updateResponse)
    }
    else {
        return NextResponse.json({ message: 'Forbidden access' }, { status: 403 })
    }


}

