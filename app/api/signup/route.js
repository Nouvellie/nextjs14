import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const {name, email, password} = body;
    try {
        const user = await new User({
            name,
            email,
            password: await bcrypt.hash(password, 12),
        }).save();
        return NextResponse.json({success: "Successfully signed."}, {status: 200});
    } catch (err) {
        console.log(err);
        return NextResponse.json({err: err.message}, {status: 500});
    }
}