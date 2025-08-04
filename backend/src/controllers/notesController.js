export async function getAllNotes(req, res) {
    res.status(200).json({message: "Have the notes"});
}

export async function getNoteById(req, res) {
    res.status(200).json({message: "Have the note"});
}

export async function createNote(req, res) {
    res.status(201).json({message: "Note created successfully"});
}

export async function updateNote(req, res) {
    res.status(200).json({message: "Post updated successfully"})
}

export async function deleteNote(req, res) {
    res.status(200).json({message: "Post deleted successfully"})
}