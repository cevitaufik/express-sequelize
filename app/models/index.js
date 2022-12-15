'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import { Database } from '../../config/database'

// const fs = require('fs')
// const path = require('path')
// const Sequelize = require('sequelize')
// const process = require('process')
// const { Database } = require('../../config/database')
const basename = path.basename(__filename)
// const env = process.env.APP_ENV || 'development'
// const config = require(path.join(__dirname, '/../../config/config.json'))[env]
const db = {}

const sequelize = (new Database()).connection()

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model

    console.log(db)
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
