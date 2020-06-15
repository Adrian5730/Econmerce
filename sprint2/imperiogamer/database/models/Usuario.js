module.exports =(sequelize,dataType) => {
    const Usuario = sequelize.define("usuarios",{

        first_name:{
            type: dataType.STRING,
            allowNull: false
        },

        last_name:{
            type: dataType.STRING,
            allowNull: false
        },

        dni:{
            type: dataType.INTEGER,
        },

        email:{
            type: dataType.STRING,
            allowNull: false
        },

        direccion:{
            type: dataType.STRING,
        },

        tel:{
            type: dataType.STRING,
        },

        password:{
            type: dataType.STRING,
        },

        avatar:{
            type: dataType.STRING,
        },

        createdAt:{
            type: dataType.DATE
        },

        updatedAt:{
            type: dataType.DATE
        },

        localidad_id: {
            type: dataType.INTEGER
        },

        provincia_id:{
            type: dataType.INTEGER
        }
    }
    )
    Usuario.associate = function(models){
        Usuario.belongsTo(models.localidades,{
            as:"localidad",
            foreignKey: "localidad_id"
        })

        Usuario.hasMany(models.carritos,{
            as:"carritos",
            foreignKey: "usuario_id"
        })
    }
    return Usuario
}
    
