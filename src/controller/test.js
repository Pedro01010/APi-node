const Test = require('@model/test')

const TestController = {
    helloworld(req, res) {
        res.sendError('Erro no banco de dados', 500)
    },
    async createSomeone(req, res) {
        const { name, age } = req.body;
        const person = new Test({ name, age });

        try {
            const savedPerson = await person.save();
            res.send(savedPerson);
        } catch (err) {
            res.status(500).send({ message: 'erro' });
        }
    }
};

module.exports = TestController;
