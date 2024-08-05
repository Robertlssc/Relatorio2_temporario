import { Router } from "express";
import { adicionarVenda, consultarVendas, consultarItensVenda, gerarRelatorioDiario } from '../controllers/vendasController.js';

const router = Router();

router.post('/add-venda', adicionarVenda);

router.get('/', consultarVendas);

router.get('/:venda_id', consultarItensVenda);

router.get('/relatorio/relatorio-diario', gerarRelatorioDiario);

export default router;
