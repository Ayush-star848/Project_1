import {v} from "convex/values";
import {mutation} from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        pictureURL: v.string(),
    },
    handler: async (ctx, args) => {
        // checking if user exist or not..
    const user  = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();

    if(!user[0]?.email) {
        // if user does not exist then create a new user
        const userData = 
        {
            name: args.name,
            email: args.email,
            pictureURL: args?.pictureURL,
            credits: 8 // default credits
    };

    const result = await ctx.db.insert("users", userData);
    return userData;
    }
    return user[0];
}
})