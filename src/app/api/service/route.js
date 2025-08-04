import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const body = await req.json()
    const bookingCollection = dbConnect(collectionName.BOOKINGS)
    const result = await bookingCollection.insertOne(body)
    return NextResponse.json(result)
}

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email
        const bookingCollection = dbConnect(collectionName.BOOKINGS)
        const result = await bookingCollection.find({ customer_email: email }).toArray()
        return NextResponse.json(result)
    }
    return NextResponse.json({})
}