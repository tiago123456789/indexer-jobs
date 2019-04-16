import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    empresa: { type: String, required: true },
    salario: mongoose.Schema.Types.Mixed,
    description: String,
    job_id: Number
})

export default mongoose.model("job", jobSchema);