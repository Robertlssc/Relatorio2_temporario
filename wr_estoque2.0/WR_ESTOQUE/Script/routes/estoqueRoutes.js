import { Router } from "express";
import { addProduto, editarProduto, getEstoque, unicoProduto, deletarProduto } from "../controllers/estoqueController.js";


const router = Router();

router.get("/", getEstoque );
router.post("/add-produto", addProduto );
router.get ("/:nome_produto", unicoProduto);
router.put ("/edit-produto/:produto", editarProduto);
router.delete ("/delete-produto/:nome_produto", deletarProduto);



export default router;