import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplimentService";

class ComplimentController {
    async  handle(request: Request, response: Response) {
        const 
        { tag_id,user_receiver, message }  = request.body
        const { user_id } = request
        const createComplimentsService = new CreateComplimentsService();

        const compliment = await createComplimentsService.execute({
            tag_id,
            user_sender: user_id,
            user_receiver,
            message
        })

        return response.json(compliment);
    }
    
}

export { ComplimentController }