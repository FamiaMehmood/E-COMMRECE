import Seller from "../../models/Sellers/SellerModel.js";

export const registerSeller = async (req,res) => {
    try {
        const {name, address, email, password} = req.body;

        const newSeller= new Seller({name, address, email, password})
        await newBuyer.save();

        return res.status(200).json(newSeller)

    } catch (error) {
        return res.status(500).json(error)
    }
}