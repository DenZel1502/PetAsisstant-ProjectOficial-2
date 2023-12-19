const router = require("express").Router();
const { faker } = require("@faker-js/faker");
const Users = require("../model/user.model");

//Rutas de Usuario

//Mostrar a todos los usuarios
router.get("/user", async (req, res) => {
    const users = await Users.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: users,
    });
});

//Llamado por ID
router.get("/user/:user_id", async (req, res) => {
    const id = req.params.user_id;
    const user = await Users.findOne({
        where: {
            user_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: user,
    });
});

//Creación de Usuario
router.post("/user", async (req, res) => {
    const dataUsers = req.body;

    try {
        await Users.sync();

        const createUser = await Users.create({
            username: dataUsers.username,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created User",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            status: 500,
            message: "Internal Server Error",
        });
    }
});


router.put("/user", (req, res) => {
    res.send("RuterUser")
});

router.put("/user", (req, res) => {
    res.send("RuterUser")
});

module.exports = router;