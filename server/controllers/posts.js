import express from 'express'
import mongoose from 'mongoose'

import userModel from '../models/postMessage.js'

const router = express.Router()

export const createUser = async (req, res) => {
  console.log('reached signup')
}

export default router
