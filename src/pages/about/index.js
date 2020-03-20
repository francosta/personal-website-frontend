import React from "react"
import Layout from "../../components/Layout/layout"
import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <img src="../../../images/relaxed-round.png"></img>
        </div>
        <div className={aboutStyles.aboutText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            venenatis sem. Sed blandit est sed mauris imperdiet dignissim. Fusce
            congue turpis nec augue venenatis, eget tempus dolor suscipit.
            Praesent mauris ipsum, maximus quis tellus id, lacinia feugiat
            sapien. Sed a neque tincidunt, volutpat tortor a, egestas odio.
            Aliquam eu enim in mauris fringilla ornare at ut neque. Quisque
            molestie arcu nec quam feugiat ullamcorper. Aliquam vel nisl at nibh
            dapibus gravida eget eget libero. Cras ornare sapien eu lobortis
            posuere. Cras sagittis lorem dui, et porttitor felis facilisis non.
            Sed malesuada dui ut neque laoreet ultricies. Integer malesuada
            dolor ac neque tristique, nec varius arcu porttitor. Cras at
            ultricies felis. In elementum, odio sed tempor gravida, nunc enim
            convallis risus, dictum venenatis nunc dui eu odio. Nullam erat
            diam, scelerisque eu consequat non, venenatis ac elit. Etiam
            lobortis mattis aliquet. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Proin iaculis
            eleifend nisl, vel laoreet leo. Quisque vitae rhoncus eros. Aliquam
            erat volutpat. Aliquam egestas turpis vel odio dapibus pellentesque.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
