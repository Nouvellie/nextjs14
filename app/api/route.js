import { NextResponse } from "next/server";

export async function GET(req) {
     // dbconnect
    return NextResponse.json({time: new Date().toLocaleString()});
}