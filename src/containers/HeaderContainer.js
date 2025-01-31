import {connect} from 'react-redux';
import Header from "../components/Header";
// import { addToCart } from '../services/Actions/actions';

const mapStateToProps=state=>({
    cardData:state.cardItems
});

const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)