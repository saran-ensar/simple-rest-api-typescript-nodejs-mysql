import { Request, Response, NextFunction } from 'express';
import { connect } from '../database'
import { Session } from '../interface/Session';

export async function getSession(req: Request, res: Response): Promise<Response> {

    try {
        const conn = await connect();
        const sessions = await conn.query('SELECT * FROM session');
        let data_session = JSON.parse(JSON.stringify(sessions[0]));
        if (data_session.length != 0) {
            for (let i = 0; i < data_session.length; i++) {
                let sessionid: string = data_session[i].id;
                let students = await conn.query('SELECT * FROM session_students where session_id= ?', [sessionid]);
                data_session[i].session_students = students[0]
            }
        }
        return res.status(200).json({
            data_session
        });
    } catch (e) {
        return res.status(200).json({
            message: e.message,
            error: e
        });
    }

}


export async function getSessionstudents(req: Request, res: Response): Promise<Response> {
    try {
        const conn = await connect();
        const id = req.params.id;
        const session_students = await conn.query('SELECT * FROM session_students where session_id= ?', [id]);
        let data_session = JSON.parse(JSON.stringify(session_students[0]));
        return res.status(200).json({
            data_session
        });
    } catch (e) {
        return res.status(200).json({
            message: e.message,
            error: e
        });
    }

}