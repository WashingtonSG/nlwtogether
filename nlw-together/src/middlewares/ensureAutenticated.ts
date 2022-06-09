import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAutenticated( 
    request:Request,
    response:Response,
    next:NextFunction) 
    {
    //
    const authToken = request.headers.authorization;
    const [, token] = authToken.split(" ");

    try {

        const { sub } = verify(
            token,
            "6425ddbf9cd648e1e4d33c4340d3373d"
            ) as IPayload;

        request.user_id = sub
        return next();
    } catch (err) {
        return response.status(401).end()
    }
    console.log(token)
    if(!authToken) {
        return response.status(401).end()
    }
    //verify( token,"6425ddbf9cd648e1e4d33c4340d3373d")






    return next()
}