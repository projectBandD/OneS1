const router=require("express").Router();
const product=require("../controllers/productController")

router.post('/newProduct',product.newProduct);
// router.get('/findUserById/:id',user.findUserById);
// router.get('/getAllUsers',user.getAllUsers);
// router.get('/findUserByName',user.findUserByName);
// router.patch('/updateById/:id',user.updateById);
// router.patch('/updateOne/:name',user.updateOne);
// router.delete("/deleteUserById/:id",user.deleteUserById);
// router.delete('/deleteOne',user.deleteOne)


module.exports=router;
