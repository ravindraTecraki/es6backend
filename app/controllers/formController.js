import Form from "../models/Form.js";

  class formController {

    static async addForm(req, res) {
        try {
            const form = await Form.create({
                name: req.body.name,
                description: req.body.description,
                content: req.body.content,
                version: req.body.version
            });
            return res.json({ msg: 'saved successfully', Result: form });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error during saving', Error: error });
        }
    }

    // get form with the id
    static async getForm(req, res) {
        try {
            const form = await Form.findByPk(req.params.id);
            if (!form) {
                return res.status(404).json({ error: 'form not found' });
            }
            return res.status(200).json({ form });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'form data not found' });
        }
    }
}

export default formController;
