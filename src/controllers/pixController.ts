import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { PixRequest, PixResponse } from '../types/pix';

export class PixController {
  public static gerarPix(req: Request, res: Response) {
    const { nome, valor, descricao }: PixRequest = req.body;

    if (!nome || !valor) {
      return res.status(400).json({ 
        error: 'Nome e valor são campos obrigatórios' 
      });
    }

    if (typeof valor !== 'number' || valor <= 0) {
      return res.status(400).json({ 
        error: 'Valor deve ser um número positivo' 
      });
    }

    const txid = uuidv4();
    const pixResponse: PixResponse = {
      pixCopiadoEColado: `PIX${txid}${valor}`,
      txid,
      qrCodeUrl: `https://pix.exemplo.com/qr/${txid}`
    };

    return res.json(pixResponse);
  }

  public static health(_req: Request, res: Response) {
    return res.json({ status: 'ok' });
  }
}