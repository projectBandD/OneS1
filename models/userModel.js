const mongoose = require('mongoose');

// תבנית שמכילה את ההגדרות של הרשימה מסוג האובייקטים האלה
// כמו טבלה של משתמשים
 
const userSchema = mongoose.Schema({
    name: { type: String, require, },//require - נדרש
    password: { type: String, minlength: 8, require },
    age: { type: Number },

    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    ]

})

module.exports = mongoose.model("Users", userSchema)//יצוא
