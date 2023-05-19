const router = require('express').Router()
const { getAllRecipe, getAddRecipePage, postAddRecipe, getEditRecipeById } = require('../controllers/recipe.controller');

router.get('/all', getAllRecipe)

router.route('/save').get(getAddRecipePage).post(postAddRecipe)
router.route("/edit/:id").get(getEditRecipeById)

module.exports = router;