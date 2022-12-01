import Footer from "./Footer";
import Header from "./Header";

export default function Base (props) {

return (
    <>
        <Header/>
        {props.children}
        <Footer/>
    </>
)
}