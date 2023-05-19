const Recipe = require('../models/recipe')

exports.getAllRecipe = (req,res,next) => {
    Recipe.find()
    .then((rows) => {
      res.render("recipes", { model: rows });
    })
    .catch((err) => console.error(err.message));
  
}

exports.getAddRecipePage = (req,res,next) => {
    res.render('create', { model: {} })
}

exports.postAddRecipe = (req,res,next) => {
    console.log(req.body);
    let {name, ingredient, instruction, quantity} = req.body

    if(!Array.isArray(ingredient)){
        ingredient = [ingredient]
        quantity = [quantity]
    }

    if(!Array.isArray(instruction)){
        instruction = [instruction]
    }

    const ingredients = ingredient.map((ing, i) => {
        //ingredient ---> ['flour', 'sugar', 'butter']
        //quantity ---> ['1 cup', '4 cups', '1 bar']
        return { name: ing, quantity: quantity[i] }
    })

    const newRecipe = new Recipe(name, ingredients, instruction)
    newRecipe.save(({ message, status }) => {
        if(status === 201){
            return res.redirect('/recipes')
        }

        res.status(status).render('error', { title: "Something went wrong", message })
    })
}

exports.getEditRecipeById = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
      .then((rows) => {
        res.render("edit", { model: rows[0] });
      })
      .catch((err) => console.error(err.message));
  };

//   exports.postEditRecipeById = (req, res) => {
//     const id = req.params.id;
//     const { title, author, comments } = req.body;
  
//     const dataToUpdate = { id, title, author, comments };
  
//     Recipe.updateOne(dataToUpdate).then(() => {
//       res.redirect("/books/all")
//     }).catch((err) => console.error(err.message));
//   };
  
  exports.deleteRecipe = (req, res) => {
    const id = req.params.id;
  
    Recipe.deleteOne(id).then(() => {
      res.redirect("/")
    }).catch((err) => console.error(err.message));
  };
  