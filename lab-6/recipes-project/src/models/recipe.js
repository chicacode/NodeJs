// const { v4: uuid }  = require('uuid')
// const fs = require('fs')
// const path = require('path')

const { mongoConnect, ObjectId } = require("../services/mongodb")
const db = mongoConnect()


// const rootDir = require('../utils/path-helper')
// const recipesData = require('../../data/recipes.json')
// const { ObjectId } = require('mongodb')
// const recipesDataPath = path.join(rootDir, 'data', 'recipes.json')

module.exports = class Recipe {
    constructor(name, ingredient, instruction){
        this.id = uuid()
        this.name = name
        this.ingredient = ingredient
        this.instruction = instruction
    }

    async save(){
        return (await db).collection("recipes").insertOne(this)
        // fs.readFile(recipesDataPath, "utf8", (err, data)=> {
        //     if(err){
        //         callback({ message: "Could not read recipe.json", status: 500 })
        //     }

        //     const recipes = JSON.parse(data)
        //     recipes.push(this)

        //     fs.writeFile(recipesDataPath, JSON.stringify(recipes, null, 2), "utf8", (err) => {
        //         if(err){
        //             callback({ message: "Could not read recipe.json", status: 500 })
        //         }

        //         callback({ message: "Recipe saved successfully", status: 201 })
        //     })
        // })
    }

    static async find(){
        return (await db).collection("recipes").find().toArray();
        // fs.readFile(recipesDataPath, (err, data) => {
        //     if(err){
        //         callback(null, { message: "No recipe list found", err })
        //     }

        //     callback(JSON.parse(data))
        // })
    }

    static async findById(id) {
        return (await db).collection("recipes").find({ _id: new ObjectId(id) }).toArray()
      }

    //update
    static async updateOne(data) {
        return (await db).collection("recipes").updateOne(
          { _id: new ObjectId(data.id) }, //filter
          { $set: { name: data.name, ingredient: data.ingredient, instruction: data.instruction } }) //update
      }

    //delete a recipe
    static async deleteOne(id) {
        return (await db).collection("recipes").deleteOne({ _id: new ObjectId(id) })
      }

    //delete all recipes
}
