import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: function () {
            return 'user_' + Math.random().toString(36).substr(2, 9);
        }
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creditBalance: { type: Number, default: 5 },
})

userSchema.pre('save', async function (next) {
    if (this.isNew) {
        const User = this.constructor;
        let isUnique = false;
        let attempts = 0;

        while (!isUnique && attempts < 10) {
            const existingUser = await User.findOne({ username: this.username });
            if (!existingUser) {
                isUnique = true;
            } else {
                this.username = 'user_' + Math.random().toString(36).substr(2, 9);
                attempts++;
            }
        }

        if (!isUnique) {
            next(new Error('Could not generate unique username'));
        }
    }
    next();
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;