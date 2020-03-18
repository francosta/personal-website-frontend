import React from "react"
import cardGridStyles from "./cardGrid.module.scss"

import Card from "../Card/Card"

const CardGrid = ({ posts }) => {
  return (
    <div className={cardGridStyles.cardGrid}>
      {posts.map((post, index) => {
        return <Card key={index} post={post} />
      })}
    </div>
  )
}

export default CardGrid
