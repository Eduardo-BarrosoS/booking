import mongoose, { Document, Model } from 'mongoose';
const { Schema } = mongoose;

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isAdmin?: boolean;
  }

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{timestamps: true,}
)

export const User: Model<IUser> = mongoose.model("User", UserSchema)

// export const User = mongoose.model("User", UserSchema)

// export default mongoose.model("User", UserSchema)