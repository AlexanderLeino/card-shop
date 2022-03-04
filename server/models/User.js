const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    
        userName: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        firstName: {
            type: String,
        },

        lastName: {
            type: String
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },

        cardCollection: [{
            type: Schema.Types.ObjectId, 
            ref:'PokemonCard',
        }],
        
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
        }
})

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
  })
  
  
  const User = model('User', userSchema);
  
  module.exports = User;
