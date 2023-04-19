const Users = require('../models/userModel')//יבוא של הסכמה - מודל

async function newUser (req, res) {
    console.log("in controller");
    // יצירת אובייקט חדש מהסוג של המודל הזה
// כולל הוספה למונגו
    let myUser1 = new Users({
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        //products: req.body.pId
    })
    // // .populate()
    try {
        await myUser1.save();//שמירת האובייקט במסד נתונים
        res.json({ newUser: myUser1 });
    }
    catch (error) {
        res.send("cannot save new user: " + error.message)
    }
}

const findUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        res.status(200).json({ getUserById: user });
    }
    catch (error) {
        res.send("cannot save new user: " + error.message)
    }
}

const findUserByName = (req, res) => {
    User.findOne({ name: req.body.name }, (err, user) => {
        if (err)
            res.status(400).send("my error: " + err);
        else
            res.status(200).json({ user: user })
    })

}


const getAllUsers = (req, res) => {

    User.find().then((users) => {
        res.status(205).json({ getAllusers: users })
    }).catch((err) => {
        res.send("cannot save new user: " + err.message)
    })



}


const updateById = (req, res) => {

    User.findByIdAndUpdate(req.params.id, { name: req.body.name }).then((user) => {
        res.json({ updateById: user })
    }).catch((err) => {
        res.send("cannot find user: " + err.message)
    })
}

const updateOne = (req, res) => {

    User.findOneAndUpdate({ name: req.params.name }, { password: req.body.password }).then((user) => {
        res.json({ updateOne: user })
    }).catch((err) => {
        res.send("cannot find user: " + err.message)
    })
}
const deleteUserById = async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id)
        res.send("user deleted" + user)
    }
    catch {
        res.send('canwt find this user')
    }
}

const deleteOne = (req, res) => {
    User.findOneAndDelete({ age: req.body.age }).then((user) => {
        res.json({ success: user })
    }).catch((err) => {
        res.send(err)
    })

}

module.exports = { newUser, findUserById, getAllUsers, updateById, findUserByName, updateOne, deleteUserById, deleteOne }
// const newUser= async (req,res)=>{
//     let myUser=new User(req.body)
//     console.log(myUser);

//     try{
//         await myUser.save();
//         res.status(200).json({newUser:myUser});
//     }
//     catch(error){
//         res.send("cannot save new user: ", error.message)
//     }
// }

// module.exports = { newUser };
// // const User = require('../models/User');
// // //create
// // const saveUser = async (req, res) => {
// //   let currentUser = new User(req.body);
// //   console.log(currentUser);

// //   //צורה 1
// // //   try {
// // //     await currentUser.save()
// // //     res.status(200).json({ user: currentUser })
// // //   } catch (error) {
// // //     res.send("cannot save user: ", error.message)
// // //   }


// //  //צורה 2
// // //   currentUser.save()
// // //   .then((user) => {
// // //     res.status(200).json({ user: user })
// // //   }).catch((error) => {
// // //     res.status(400).send(error);
// // //   }) 


// //  //צורה 3
// //   currentUser.save(function (err, user) {
// //     if (err)
// //       res.status(400).send(err);
// //       else
// //       res.status(200).json({ user: user })
// //   })

// // }
// // module.exports = { saveUser };