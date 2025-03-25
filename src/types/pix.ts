export interface PixRequest {
  nome: string;
  valor: number;
  descricao?: string;
}

export interface PixResponse {
  pixCopiadoEColado: string;
  txid: string;
  qrCodeUrl: string;
}