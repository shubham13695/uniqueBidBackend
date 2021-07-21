import { Request, Response } from "express";
import { AMOUNT, TollModel, WAYTYPE } from "../entity/Toll";

class _TollModule {
    async create(req: Request, res: Response) {
        try {
            let way: WAYTYPE = req.body.way as WAYTYPE;
            let amount: AMOUNT = req.body.way as any as AMOUNT;
            let ticket = Math.random().toString(36).slice(2).toUpperCase();
            let _ = await TollModel.create({ticket:ticket,vehicleNo: req.body.vehicleNo, way: way, amount: AMOUNT[amount] });
            return res.status(200).send({ msg: "Ticket Created Sucessfully.",data:_})
        }
        catch (ex) {
            return res.status(500).send({ errors: "Something Went Wrong" })
        }
    }

    async validateTwoWayTicket(req: Request, res: Response) {
        try {
            let ticket:string = req.query.ticket as string;
            let vehicleNo:string = req.query.vehicleNo as string;
            
            let toll = await TollModel.exists({
                                                ticket:ticket,
                                                vehicleNo:vehicleNo,
                                                way:WAYTYPE.TWOWAY,
                                                $expr:{$lt:[{"$subtract":["$$NOW","$createdAt"]},1000*60*60*24]}
                                            });
            if(toll){
                return res.status(200).send({data:"Valid Ticket"});
            }
            return res.status(422).send({data:"Invalid Ticket"});

        }
        catch (ex) {
            console.log(ex)
            return res.status(500).send({ errors: "Something Went Wrong" })
        }
    }
}

export const TollModule = new _TollModule();

