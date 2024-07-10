import './Shop.css'
import Shopping from '../../Components/ShoppingItem/Shopping'
const Shop = () => {
    return (
        <>
            {/* Shop Home */}
            <div className="ShopHome">
                <div className="ShopContent">
                    <h6>Power. Progress. Perform.</h6>
                    <h5>Shop Now</h5>
                </div>
            </div>

            <Shopping />
            <Shopping />
            <Shopping />
            <Shopping />



        </>
    )
}
export default Shop