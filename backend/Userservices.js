import UserModel from '../models/UserModel.js';

class UserService {
  // Encapsulation: Expose only necessary details
  async getUserDetails(itemId, pincode) {
    const user = await UserModel.findOne({ itemID: itemId, pincode }).lean();
    if (!user) return null;

    return {
      name: user.name,
      itemID: user.itemID,
      deliveryDate: user.deliveryDate,
      shippedDate: user.shippedDate,
      weight: user.weight,
      charge: user.charge,
    };
  }
}

export default UserService;
