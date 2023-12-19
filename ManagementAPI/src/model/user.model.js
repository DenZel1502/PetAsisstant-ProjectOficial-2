const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        },
        {
            sequelize,
            modelName: "User",
        }
    );

module.exports = User;
















/*async function testConnection() {
       try {
             await sequelize.authenticate();
            console.log("All Good!!")
           } catch (err) {
             console.error("All Bad!!", err)
         }
     }
    
     testConnection();*/
