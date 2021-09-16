import "./about.styles.scss";
import Contact from "../contact/contact.component";
import Title from "../title/title.component"

const About = () => {

    return(
        <div className="aboutContainer">
            <div className="about">
            <Title title={"About"} widthSize={"25vw"} />
            <p className="aboutContent" style={{width: "60vw", color: "rgb(187, 187, 187)"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at suscipit libero. Morbi ut condimentum odio, nec ullamcorper urna. Sed scelerisque vel quam vel aliquam. Nam in semper felis. Suspendisse at risus sagittis, aliquam sapien a, interdum erat. Nullam eget hendrerit risus. Nam iaculis odio magna, quis congue urna facilisis et. Cras dapibus ultricies sagittis. Curabitur egestas velit lacus, id bibendum augue mattis vel. Donec non venenatis odio, eget mattis lacus. Sed rhoncus massa ut est interdum, eu convallis ligula varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ut tristique tortor. Ut vehicula, nisi a sagittis pulvinar, risus lacus hendrerit neque, at pharetra justo mauris mattis urna. Integer consectetur orci at rhoncus finibus.
            </p>
            </div>
            <Contact />

            
        </div>
    )
}

export default About;