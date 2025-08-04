import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({message: "Have the notes"});
});

router.post("/", (req, res) => {
  res.status(201).json({message: "Note created successfully"});
});

router.put("/:id", (req, res) => {
    res.status(200).json({message: "Post updated successfully"})
})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Post deleted successfully"})
})

export default router

