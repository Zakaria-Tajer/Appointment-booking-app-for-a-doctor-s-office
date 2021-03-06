import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken/verify";

export async function middleware(req) {
    // getting cookies from request
    const { cookies }= req;
    // accessing cookies
    const accesToken = cookies.accesToken
    const successCookie = cookies.success

    // getting url
    const { pathname } = req.nextUrl

    if(pathname.includes('/dashboard')){

        if(!accesToken && !successCookie){
            return NextResponse.redirect(new URL('/', req.url))
        }else if(successCookie){
            return NextResponse.next();
        }

        try {
            verify(accesToken,process.env.NEXT_PUBLIC_SECRET_KEY);

            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    return NextResponse.next()
  

}
