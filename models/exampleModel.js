const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "String is Required"
      },
    
      name: {
        type: String,
        unique: true,
        required: true
      },
    
      duration: {
        type: Number,
        required: true
      },
    
      weight: {
        type: Number,
       
      },
    
      reps: {
        type: Number,
      
      },
      sets: {
        type: Number,
        
      },
      distance: {
        type: Number,
        
      },
    }
  ]
 
});

const workout = mongoose.model("Workouts", workout);

module.exports = workout;